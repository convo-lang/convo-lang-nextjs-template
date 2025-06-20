export const convoPackagePaths=[
    "@/lib/types.ts",
    "@/components/message-views/SuggestionMsg.tsx",
    "@/components/message-views/WeatherMsg.tsx",
    "@/components/message-views/YouTubeVideoMsg.tsx",
    "@/lib/example-functions/crypto.ts"
] as const;
export type ConvoPackagePath=(typeof convoPackagePaths[number])|(string & {});