import "./App.css";
import { useState, useEffect } from "react";
import { urbitVisor } from "@dcspark/uv-core";
import Notebook from "./Notebook";
import Spinner from "./Spinner";

function App() {
  const [ship, setShip] = useState("");
  const [loading, setLoading] = useState(true);
  const spinner = (
    <Spinner width={100} height={100} innerColor="white" outerColor="black" />
  );
  useEffect(() => {
    urbitVisor.require(
      ["shipName", "poke", "thread", "subscribe", "scry"],
      setData
    );
  }, []);

  function setData() {
    urbitVisor.getShip().then((res) => {
      setShip(res.response);
      checkChannelExists(res.response);
    });
  }

  interface Key {
    name: string; // the name of the channel, in kebab-case.
    ship: string; // the ship that hosts the channel
  }
  const [registered, setRegistered] = useState(false);
  function checkChannelExists(ship: string) {
    urbitVisor.scry({ app: "graph-store", path: "/keys" }).then((res) => {
      setLoading(false);
      if (res.status === "ok") {
        const keys: Key[] = res.response["graph-update"].keys;
        if (
          keys.find(
            (key: Key) => key.ship === ship && key.name === "my-urbit-notes"
          )
        )
          setRegistered(true);
      } else handleKeyScryError();
    });
  }
  const [error, setError] = useState("");
  function handleKeyScryError() {
    setError("Scry failed");
  }
  function handleThreadError() {
    setError("Thread failed");
  }

  interface Thread {
    threadName: string; // name of the channel
    inputMark: string; // json to hoon conversion mark for the thread request body
    outputMark: string; // hoon to json conversion mark for the thread response body
    body: any; // request body
  }
  async function createChannel() {
    setLoading(true);
    const body = {
      create: {
        resource: {
          ship: `~${ship}`,
          name: "my-urbit-notes",
        },
        title: "My Urbit Notes",
        description: "My Awesome Private Urbit Notebook",
        associated: {
          policy: {
            invite: { pending: [] },
          },
        },
        module: "publish",
        mark: "graph-validator-publish",
      },
    };
    urbitVisor
      .thread({
        threadName: "graph-create",
        inputMark: "landscape/graph-view-action",
        outputMark: "json",
        body: body,
      })
      .then((res) => {
        if (res.status === "ok") checkChannelExists(ship);
        else handleThreadError();
      });
  }
  if (loading)
    return (
      <div className="App">
        <div className="loading">{spinner}</div>
      </div>
    );
  else if (!registered)
    return (
      <div className="App">
        <header className="App-header">
          {ship && <p>Hi ~{ship}</p>}
          <p>Welcome to Urbit Notes</p>
          <p>
            Your one and only 100% private, yet networked, notes application.
          </p>
          {!ship && (
            <button className="create-button" onClick={createChannel}>
              Connect your Urbit Visor
            </button>
          )}
          {ship && (
            <button className="create-button" onClick={createChannel}>
              Setup your Notebook
            </button>
          )}
          {error && <p className="error-message">{error}</p>}
        </header>
      </div>
    );
  else
    return (
      <div className="App">
        <Notebook ship={ship} />
      </div>
    );
}
export default App;
