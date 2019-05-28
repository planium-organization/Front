import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';

export class Duration
{

    public Hours: number;
    public Minutes: number;
    public Seconds: number;

    constructor(timespan: TimeSpan)
    {
        this.Hours = timespan.hours;
        this.Minutes = timespan.minutes;
        this.Seconds = timespan.seconds;
    }
}
