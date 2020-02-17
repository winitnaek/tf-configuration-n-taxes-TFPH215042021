import React, { Component } from "react";
import { render } from "react-dom";
import "../../../deps/jqwidgets/styles/jqx.base.css"
import JqxButton from '../../../deps/jqwidgets-react/react_jqxbuttons'

import * as ReactDOM from 'react-dom';
import JqxWindow from '../../../deps/jqwidgets-react/react_jqxwindow';
import JqxInput from '../../../deps/jqwidgets-react/react_jqxinput';

import JqxChart, {
    IChartProps
} from '../../../deps/jqwidgets-react/react_jqxchart';
import JqxGrid, {
    IGridProps,
    jqx
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import JqxTabs from "jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs";

interface AppProps { }
interface AppState {
    name: string;
}

class MyApp extends Component<{}, IGridProps> {
    private myTabs = React.createRef<JqxTabs>();
    private gridElement = React.createRef<HTMLDivElement>();
    //private gridElementTwo = React.createRef<HTMLDivElement>();
    private gridElementTwo = React.createRef<HTMLDivElement>();
    private chartElement = React.createRef<HTMLDivElement>();
    private myGrid = React.createRef<JqxGrid>();
    private myGridTwo = React.createRef<JqxGrid>();
    private myWindow = React.createRef<JqxWindow>();
    private date = React.createRef<JqxInput>();
    private sAndP500 = React.createRef<JqxInput>();

    constructor(props: {}) {
        super(props);

        const rendertoolbar = (toolbar: any): void => {
            const addRowClick = () => {
                //const datarow = this.generaterow();
                //this.myGrid.current!.addrow(null, datarow);
                this.myWindow.current!.open();
            };

            ReactDOM.render(
                <div style={{ margin: '5px' }}>
                    <div style={{ float: 'left' }}>
                        <JqxButton onClick={addRowClick} width={105} value={'Add New Row'} />
                    </div>

                </div>,
                toolbar[0]
            );
        };

        this.state = {
            rendertoolbar
        };
    }
    public render() {
        return (
            <JqxTabs
                ref={this.myTabs}
                // @ts-ignore
                width={400}
                height={560}
                initTabContent={this.initWidgets}
            >
                <ul>
                    <li style={{ marginLeft: 30 }}>
                        <div style={{ height: 20, marginTop: 5 }}>
                            <div style={{ float: "left" }}>
                                <img width="16" height="16" src="./../images/catalogicon.png" />
                            </div>
                            <div
                                style={{
                                    marginLeft: 4,
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                    float: "left"
                                }}
                            >
                                Grid #1
              </div>
                        </div>
                    </li>
                    <li>
                        <div style={{ height: 20, marginTop: 5 }}>
                            <div style={{ float: "left" }}>
                                <img width="16" height="16" src="./../images/pieicon.png" />
                            </div>
                            <div
                                style={{
                                    marginLeft: 4,
                                    verticalAlign: "middle",
                                    textAlign: "center",
                                    float: "left"
                                }}
                            >
                                Grid #2
              </div>
                        </div>
                    </li>
                </ul>
                <div style={{ overflow: "hidden" }}>
                    <div id="jqxGrid" ref={this.gridElement} />
                    <div style={{ marginTop: 10, height: "15%" }}>

                    </div>
                </div>
                <div style={{ overflow: "hidden" }}>
                    <div id="jqxGrid2" ref={this.gridElementTwo} />
                </div>
            </JqxTabs>
        );
    }
    private initGrid = () => {
        const source = {
            datafields: [{ name: "Date" }, { name: "S&P 500" }, { name: "NASDAQ" }],
            datatype: "csv",
            //url: './assets/nasdaq_vs_sp500.txt'
            localdata: `1/2/2014,1831.98,4143.07
                  1/3/2014,1831.37,4131.91
                  1/6/2014,1826.77,4113.68
                  1/7/2014,1837.88,4153.18
                  1/8/2014,1837.49,4165.61
                  1/9/2014,1838.13,4156.19
                  1/10/2014,1842.37,4174.67
                  1/13/2014,1819.2,4113.3
                  1/14/2014,1838.88,4183.02
                  1/15/2014,1848.38,4214.88
                  1/16/2014,1845.89,4218.69
                  1/17/2014,1838.7,4197.58
                  1/21/2014,1843.8,4225.76
                  1/22/2014,1844.86,4243
                  1/23/2014,1828.46,4218.88
                  1/24/2014,1790.29,4128.17
                  1/27/2014,1781.56,4083.61
                  1/28/2014,1792.5,4097.96
                  1/29/2014,1774.2,4051.43
                  1/30/2014,1794.19,4123.13
                  1/31/2014,1782.59,4103.88
                  2/3/2014,1741.89,3996.96
                  2/4/2014,1755.2,4031.52
                  2/5/2014,1751.64,4011.55
                  2/6/2014,1773.43,4057.12
                  2/7/2014,1797.02,4125.86`
        };

        const dataAdapter = new jqx.dataAdapter(source, {
            async: false,
            loadError: (xhr: any, status: any, error: any) => {
                console.log(xhr, status, error);
                //alert('Error loading "' + source.url + '" : ' + error);
            }
        });

        const columns: IGridProps["columns"] = [
            { cellsformat: "d", datafield: "Date", text: "Date", width: 250 },
            { datafield: "S&P 500", text: "S&P 500", width: 150 },
            { datafield: "NASDAQ", text: "NASDAQ" }
        ];
        const grid = (
            <JqxGrid
                ref={this.myGrid}
                width={"100%"}
                height={400}
                source={dataAdapter}
                columns={columns}
                showtoolbar={true}
                rendertoolbar={this.state.rendertoolbar}
            />
        );
        render(grid, this.gridElement.current!);

        setTimeout(_ => {
            // Select Row
            this.myGrid.current!.selectrow(10);
            // Get Selected Row
            console.log(this.myGrid.current!.getOptions("getselectedrowindexes"));
        });
    };

    private initChart = () => {
        const source = {
            datafields: [{ name: "Date" }, { name: "S&P 500" }, { name: "NASDAQ" }],
            datatype: "csv",
            //url: './assets/nasdaq_vs_sp500.txt'
            localdata: `1/2/2014,1831.98,4143.07
                  1/3/2014,1831.37,4131.91
                  1/6/2014,1826.77,4113.68
                  1/7/2014,1837.88,4153.18
                  1/8/2014,1837.49,4165.61
                  1/9/2014,1838.13,4156.19
                  1/10/2014,1842.37,4174.67
                  1/13/2014,1819.2,4113.3
                  1/14/2014,1838.88,4183.02
                  1/15/2014,1848.38,4214.88
                  1/16/2014,1845.89,4218.69
                  1/17/2014,1838.7,4197.58
                  1/21/2014,1843.8,4225.76
                  1/22/2014,1844.86,4243
                  1/23/2014,1828.46,4218.88
                  1/24/2014,1790.29,4128.17
                  1/27/2014,1781.56,4083.61
                  1/28/2014,1792.5,4097.96
                  1/29/2014,1774.2,4051.43
                  1/30/2014,1794.19,4123.13
                  1/31/2014,1782.59,4103.88
                  2/3/2014,1741.89,3996.96
                  2/4/2014,1755.2,4031.52
                  2/5/2014,1751.64,4011.55
                  2/6/2014,1773.43,4057.12
                  2/7/2014,1797.02,4125.86`
        };

        const dataAdapter = new jqx.dataAdapter(source, {
            async: false,
            loadError: (xhr: any, status: any, error: any) => {
                console.log(xhr, status, error);
                //alert('Error loading "' + source.url + '" : ' + error);
            }
        });

        const columns: IGridProps["columns"] = [
            { cellsformat: "d", datafield: "Date", text: "Date", width: 250 },
            { datafield: "S&P 500", text: "S&P 500", width: 150 },
            { datafield: "NASDAQ", text: "NASDAQ" }
        ];
        const grid2 = (
            <JqxGrid
                ref={this.myGridTwo}
                width={"100%"}
                height={400}
                source={dataAdapter}
                columns={columns}
                showtoolbar={true}
                rendertoolbar={this.state.rendertoolbar}
            />
        );
        render(grid2, this.gridElementTwo.current!);

        setTimeout(_ => {
            // Select Row
            this.myGridTwo.current!.selectrow(10);
            // Get Selected Row
            console.log(this.myGridTwo.current!.getOptions("getselectedrowindexes"));
        });
    };
    private initWidgets = (tab: any) => {
        switch (tab) {
            case 0:
                this.initGrid();
                break;
            case 1:
                this.initChart();
                break;
        }
    };
}

export default MyApp
