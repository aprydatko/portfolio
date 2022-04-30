import TagManager from "react-gtm-module";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER;

export const initTagManager = () => {
    if (apiKey) {
        const tagManagerArgs = {
            gtmId: apiKey,
        };
        TagManager.initialize(tagManagerArgs);
    }
};
