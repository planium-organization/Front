import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';

export class Duration
{

    public Hours: number;
    public Minutes: number;
    constructor(hours: number, minutes : number)
    {
        this.Hours = hours;
        this.Minutes = minutes;
    }
}
