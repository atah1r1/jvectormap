import dynamic from 'next/dynamic'
import React from 'react';
const VectorMap = dynamic(
    () => import("@react-jvectormap/core").then((m) => m.VectorMap),
    { ssr: false, }
);


export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false,
            data1: [
                {
                    latLng: [41.9, 12.45],
                    name: "Vatican City",
                    value: 20
                },
                {
                    latLng: [11, 12.45],
                    name: "WOW",
                    value: 30
                },
                {
                    latLng: [-33, 12.45],
                    name: "WAZZZA",
                    value: 16
                }
            ],
            data2: [
                {
                    latLng: [4.9, 11.45],
                    name: "V",
                    value: 20
                },
                {
                    latLng: [-9, 90],
                    name: "W",
                    value: 20
                },
                {
                    latLng: [-37, 12.45],
                    name: "W",
                    value: 20
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <a
                    href="#"
                    onClick={() =>
                        this.setState({ check: !this.state.check }, () =>
                            console.log(this.state.data1)
                        )
                    }
                >
                    Click
                </a>
                <div style={{ width: 500, height: 300 }}>
                    <VectorMap
                        map={"world_mill_en"}
                        backgroundColor="#FFFFF"
                        markerStyle={{
                            initial: {
                                fill: "#FFFF",
                                stroke: "#383f47"
                            }
                        }}
                        series={{
                            markers: [
                                {
                                    attribute: "r",
                                    scale: [5, 20],
                                    values: [60, 6, 54],
                                    normalizeFunction: "polynomial"
                                }
                            ]
                        }}
                        regionStyle={{
                            initial: {
                                fill: "#128da7"
                            },
                            hover: {
                                fill: "#A0D1DC"
                            }
                        }}
                        markers={this.state.check ? this.state.data1 : this.state.data2}
                        ref="map"
                        containerStyle={{
                            width: "100%",
                            height: "100%"
                        }}
                        containerClassName="map"
                    />
                </div>
            </div>
        );
    }
}