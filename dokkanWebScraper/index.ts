import { AzureFunction, Context } from "@azure/functions"
import { getDokkanData } from "./scraper";



const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    context.log('Timer trigger function starting!');   
    const data = await getDokkanData()
    context.bindings.myOutputCosmos= JSON.stringify(data)
    context.log('Timer trigger function ended!');   
};

export default timerTrigger;
