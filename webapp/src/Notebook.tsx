import "./App.css";
import { useState, useEffect, useReducer } from "react";
import { urbitVisor } from "@dcspark/uv-core";
import type { Graph, Post, Content, TextContent } from "./types";
import Spinner from "./Spinner";
interface NotebookProps {
  ship: string; // ship name
}

function Notebook(props: NotebookProps) {
  useEffect(() => {
    urbitVisor
      .scry({
        app: "graph-store",
        path: `/graph/~${props.ship}/my-urbit-notes`,
      })
      .then((res) => {
        setPosts({
          type: "add-post",
          payload: res.response["graph-update"]["add-graph"]["graph"],
        });
        setLoading(false);
      });
    urbitVisor.on("sse", ["graph-update", "add-nodes"], handleGraphUpdate);
    urbitVisor.subscribe({ app: "graph-store", path: "/updates" });
  }, []);

  const postReducer = (state: Graph, action) => {
    switch (action.type) {
      case "add-post":
        const nod = Object.entries(action.payload).map((entry) => {
          const key = entry[0].replace("/", "");
          return [key, entry[1]];
        });
        const nodes = Object.fromEntries(nod);
        return { ...state, ...nodes };
      case "delete-post":
        const { [action.payload]: deletedPost, ...rest } = state;
        return rest;
      case "edit-post":
        const index = Object.keys(action.payload)[0];
        const base_index = Object.keys(action.payload)[0].split("/")[1];
        const revision = Object.keys(action.payload)[0].split("/")[3];
        const post = state[base_index];
        console.log(post, "post to update");
        post.children["1"].children[revision] = action.payload[index];
        console.log(post, "updated post");
        const editedPost = {};
        editedPost[base_index] = post;
        return { ...state, ...editedPost };
    }
  };
  const initialPosts: Graph = {};
  const [posts, setPosts] = useReducer(postReducer, initialPosts);
  const [loading, setLoading] = useState(true);
  const spinner = (
    <Spinner width={40} height={40} innerColor="white" outerColor="black" />
  );
  // const [posts, setPosts] = useState<Graph>({});
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selected, setSelected] = useState<Post>(null);

  function buildPost(index: string, contents: Content[] = []) {
    return {
      author: "~" + props.ship,
      contents: contents,
      hash: null,
      index: index,
      signatures: [],
      "time-sent": Date.now(),
    };
  }
  function addNotebookPost() {
    setLoading(true);
    const indexes: number[] = graphToList(posts).map((p) => p.index);
    const last: number = indexes.reduce(
      (acc: number, cur: number) => (acc > cur ? acc : cur),
      0
    );
    const index = `/${last + 1}`;
    const contents = [{ text: title }, { text: text }];
    const children = {
      "1": {
        post: buildPost(`${index}/1`),
        children: {
          "1": {
            children: null,
            post: buildPost(`${index}/1/1`, contents),
          },
        },
      },
      "2": {
        post: buildPost(`${index}/2`),
        children: null,
      },
    };
    const nodes = {};
    nodes[index] = {
      children: children,
      post: buildPost(index),
    };
    const body = {
      "add-nodes": {
        resource: { name: "my-urbit-notes", ship: `~${props.ship}` },
        nodes: nodes,
      },
    };
    urbitVisor
      .poke({ app: "graph-store", mark: "graph-update-3", json: body })
      .then((res) => console.log(res));
  }
  function editPost() {
    setLoading(true);
    const last: number = Object.keys(selected.revisions).reduce(
      (acc: number, item: string) =>
        acc > parseInt(item) ? acc : parseInt(item),
      0
    );
    const index = `/${selected.index}/1/${last + 1}`;
    const contents = [{ text: title }, { text: text }];
    const nodes = {};
    nodes[index] = {
      children: null,
      post: buildPost(`${index}`, contents),
    };
    const body = {
      "add-nodes": {
        resource: { name: "my-urbit-notes", ship: `~${props.ship}` },
        nodes: nodes,
      },
    };
    urbitVisor
      .poke({ app: "graph-store", mark: "graph-update-3", json: body })
      .then((res) => console.log(res));
  }

  function handleGraphUpdate(data: any) {
    setLoading(false);
    if (Object.keys(data.nodes)[0].split("/").length > 3)
      //  if it's an update an edited post, go update the post
      setPosts({ type: "edit-post", payload: data.nodes });
    else setPosts({ type: "add-post", payload: data.nodes }); // if it's an update about a new post, go add the post to the post list
  }

  function graphToList(graph: Graph): Post[] {
    const nodes = Object.keys(graph).map((index) => graph[index]);
    const notDeleted = nodes.filter((node) => typeof node.post !== "string"); // filter out deleted posts
    return notDeleted
      .map((node) => {
        const revisions = node.children["1"].children; // look at the post revisions and choose the latest version to display
        const last = Object.keys(revisions).reduce(
          (acc, cur) => (parseInt(acc) > parseInt(cur) ? acc : cur),
          "0"
        );
        const indexString = revisions[last].post.index.split("/")[1];
        return {
          index: parseInt(indexString),
          contents: revisions[last].post.contents,
          author: revisions[last].post.author,
          date: revisions[last].post["time-sent"],
          revisions: revisions,
        };
      })
      .reverse(); // graphs are already ordered descending by index, reverse it so now notes show up first
  }

  function select(post: Post) {
    // make the new-post composer become an edit box when clicked on a post; restore when clicking again on the same post
    if (selected?.index === post.index) {
      setSelected(null);
      setTitle("");
      setText("");
    } else {
      setSelected(post);
      setTitle((post.contents[0] as TextContent).text);
      setText((post.contents[1] as TextContent).text);
    }
  }

  return (
    <div className="notebook">
      <header>
        <h1>My Urbit Notes</h1>
      </header>
      <div className="composer">
        <div className="row-1">
          <input
            type="text"
            value={title}
            placeholder="Note Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          {!selected && <button onClick={addNotebookPost}>New post</button>}
          {selected && <button onClick={editPost}>Edit post</button>}
        </div>
        <textarea
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {loading && spinner}
      </div>
      <div className="post-list">
        <div className="post-preview post-preview-header">
          <div className="post-preview-title">
            <p>Note Title</p>
          </div>
          <div className="post-preview-date">
            <p>Last Modified</p>
          </div>
        </div>
        {graphToList(posts).map((post: Post) => {
          return <PostPreview key={post.index} post={post} select={select} />;
        })}
      </div>
    </div>
  );
}
export default Notebook;

interface PostProps {
  post: Post;
  select: (post: Post) => void;
}
function PostPreview(props: PostProps) {
  function showPost() {
    props.select(props.post);
  }
  return (
    <div className="post-preview">
      <div onClick={showPost} className="post-preview-title">
        <p>{(props.post.contents[0] as TextContent).text}</p>
      </div>
      <div className="post-preview-date">
        <p>{new Date(props.post.date).toLocaleDateString()}</p>
        <p>{new Date(props.post.date).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};