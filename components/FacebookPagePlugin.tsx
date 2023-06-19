"use client";
import { FacebookProvider, Page } from "react-facebook";

const FacebookPagePlugin = () => {
  return (
    <FacebookProvider appId="1418410625626719">
      <Page
        href="https://www.facebook.com/Dreamlighthospital"
        tabs="timeline"
        width={800}
        height={500}
        smallHeader={true}
        adaptContainerWidth={true}
        hideCover={false}
        showFacepile={true}
      />
    </FacebookProvider>
  );
};

export default FacebookPagePlugin;
