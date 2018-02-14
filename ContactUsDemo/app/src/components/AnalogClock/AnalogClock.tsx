import * as React from "react";
import "./AnalogClock.css";
const classNames = require("classnames");

interface AnalogClockState {
    hour: number;
    minute: number;
    second: number;
}

export class AnalogClock extends React.Component<{}, AnalogClockState> {
    private hours: Array<number>;

    constructor(props: any) {
        super(props);

        this.state = {
            hour: 0,
            minute: 0,
            second: 0
        };
    }

    componentWillMount(): void {
        this.hours = [];
        for (let i = 1; i <= 12; ++i) {
            this.hours.push(i);
        }

        this.setTime();
        setInterval(() => {
            this.setTime();
        }, 500);
    }

    setTime(): void {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        if (
            this.state.hour !== hour ||
            this.state.minute !== minute ||
            this.state.second !== second
        ) {
            this.setState({
                hour,
                minute,
                second
            });
        }
    }

    private getRotation(time: number, divisor: number): number {
        return Math.floor(time / divisor * 360);
    }

    render() {
        return (
            <div className="analog-clock">
                {this.hours.map(hour => (
                    <div
                        className={classNames("hour", `hour-${hour}`)}
                        key={hour}
                    />
                ))}
                <div
                    className="hand second-hand"
                    style={{
                        transform: `rotate(${this.getRotation(
                            this.state.second,
                            60
                        )}deg)`
                    }}
                />
                <div
                    className="hand minute-hand"
                    style={{
                        transform: `rotate(${this.getRotation(
                            this.state.minute,
                            60
                        )}deg)`
                    }}
                />
                <div
                    className="hand hour-hand"
                    style={{
                        transform: `rotate(${this.getRotation(
                            this.state.hour,
                            12
                        )}deg)`
                    }}
                />
            </div>
        );
    }
}
