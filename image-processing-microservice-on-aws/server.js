import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  /**
   * @param: image_url: URL of a publicly accessible image
   * @returns: the filtered image file
   */
  app.get( "/filteredimage", async (req, res) => {

    try { 

      const { image_url } = req.query;

      if (!image_url) {
        res.status(400).send(`The param "image_url" is missing.`);
        return;
      }

      try {
        const filteredImagePath = await filterImageFromURL(image_url)
        res.sendFile(filteredImagePath);
        res.on('finish', function () {
          // clear local files on finish
          deleteLocalFiles([filteredImagePath]);
        });

      } catch (errorFilter) {
        // func filterImageFromURL throws an error
        res.status(400).send(`Cannot filter the image from url. Please check it.\n` + errorFilter);
        return;
      }

    } catch (errorExternal) {
      // func filterImageFromURL throws an error
      res.status(500).send(`Error:\n` + error);
    }
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
