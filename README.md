# nextjs repro - basePath + middleware + pages routes = full roundtrip

Hello.

Here is a repro about an issue we are experiencing with pages router. Conditions are the following:

- Using a basePath.
- Using middleware.
- Using pages router.
- Index page using `getServerSideProps`.

## Symptoms

![oh no](./assets/oh-no.gif)

- Client navigation from `/` -> `/yolo` = OK.
- Client navigation from `/yolo` -> `/` = Full roundtrip. We appear to have a 404 on getting `index.json`, as shown in the recording, even though the file exists.
