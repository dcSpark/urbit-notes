# Urbit Visor Notes Web

This repo contains the web interface for Urbit Visor Notes. A simple web application to take notes using graph-store, the personal social database used by Urbit Groups.

This app was made as learning material for the [Urbit Visor Guides](https://TBD). But it can be used standalone as a quick, simple interface to take and read notes on the go.

## Getting Started

These apps were made as learning material for the Urbit Visor Developer guides at https://(TBD).

To use Urbit Notes, visit https://(TBD) or compile the app.

1. Clone this repo
2. Install dependencies (e.g. `npm i`)
3. Build the app (`npm run build`)
4. Follow the instructions to deploy the built app at the server of your choosing.

## Using the app
- Make sure you have a working Urbit instance running, and Urbit Visor set up to interact with your urbit.
- Visit the app and check your Visor to give the app permissions.
- Reload the app and you'll see the main (and only) page. The main page contains a composer above and a note list below.
- Write note titles at the text input, note body at the textarea.
- Press the button to add a new note.
- The page should update automatically, and the new note should populate in the list below the textarea.
- Click on any note to display its contents in the composer. Modify the contents and click on the button to edit a note.
- Empty the title and body of a note and click the button to delete it.