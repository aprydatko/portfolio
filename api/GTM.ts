import TagManager from "react-gtm-module";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER;

const tagManagerArgs = {
    gtmId: apiKey,
};

export const initTagManager = () => TagManager.initialize(tagManagerArgs);
