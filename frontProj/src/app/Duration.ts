import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';

export class Duration
{

    public Hours: number;
    public Minutes: number;
    constructor(timespan: TimeSpan)
    constructor(hours: number, minutes : number)
    constructor(hours?: number | TimeSpan, minutes? : number)
    {
        if(typeof hours == 'number')
        {
            this.Hours = hours;
            this.Minutes = minutes;
        }
        else
        {
            this.Hours = hours.hours;
            this.Minutes = hours.minutes;
        }
    }
}
