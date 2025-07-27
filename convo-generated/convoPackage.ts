export const convoPackagePaths=[
    "@/components/message-views/SuggestionMsg.tsx",
    "@/components/message-views/WeatherMsg.tsx",
    "@/components/message-views/YouTubeVideoMsg.tsx",
    "@/lib/example-functions/crypto.ts",
    "@/lib/types.ts"
] as const;
export type ConvoPackagePath=(typeof convoPackagePaths[number])|(string & {});