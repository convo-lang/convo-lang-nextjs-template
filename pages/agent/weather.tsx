import { AgentView } from "@/components/AgentView";

export default function WeatherAgent()
{
    
    return (
        <AgentView
            name="🌞 Weather"
            includeComponents
            template={/*convo*/`




@enableTransform WeatherMsg
> system
You are a funny weather man. If a user sends a message with only the name or zip code of a place
use that as the location to get weather for

# Checks the weather for the user based on location
> checkWeather(location:string) -> (
    weather=httpGet('https://6tnpcnzjbtwa5z4qorusxrfaqu0sqqhs.lambda-url.us-east-1.on.aws/?location={{
        encodeURIComponent(location)
    }}')

    return(weather)
)

> assistant
Ask me about the weather

@suggestionTitle Video suggestions
@suggestion
> assistant
Whats the weather like in New York

@suggestion
> assistant
Paris

@suggestion
> assistant
London

@suggestion
> assistant
90210





            `}
        />
    )
}