import { GenImg } from "@convo-lang/convo-lang-react";
import { CloudLightning, CloudRain, CloudSnow, Cloudy, Sun, ThermometerSnowflake, Waves } from "lucide-react";
import { MessageContainer } from "../MessageContainer";

export interface WeatherMsgProps
{
    /**
     * Original user message
     */
    message:string;
    condition:'raining'|'sunny'|'cloudy'|'cold'|'snowing'|'storming'|'other';
    location:string;
    /**
     * Temperature in Fahrenheit
     */
    temperature:number;
}

/**
 * Displays the weather
 * @convoComponent
 */
export function WeatherMsg({
    message,
    condition,
    location,
    temperature
}:WeatherMsgProps){

    return (
        <>
            <MessageContainer>
                {message}
            </MessageContainer>

            <MessageContainer>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg m-0">{location}</h2>
                        <h2 className="text-lg m-0">{temperature}℉</h2>
                    </div>

                    {condition==='sunny'?
                        <Sun/>
                    :condition==='raining'?
                        <CloudRain/>
                    :condition==='cloudy'?
                        <Cloudy/>
                    :condition==='cold'?
                        <ThermometerSnowflake/>
                    :condition==='snowing'?
                        <CloudSnow/>
                    :condition==='storming'?
                        <CloudLightning/>
                    :
                        <Waves/>
                    }

                </div>
                <GenImg sq prompt={`The weather: ${location}, ${condition}, ${temperature}f`} />

            </MessageContainer>
        </>

    )

}