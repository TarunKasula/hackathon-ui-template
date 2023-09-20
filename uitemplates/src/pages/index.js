import { ConfigProvider, Table, Input } from "antd";
import React, { useState } from "react";
import GraphVisualization from 'react-graph-viz-engine'
const { Search } = Input;


function Index() {
    return (
        <div>
            Hellow World
            <GraphVisualization
                data={{
                    data: {
                        actors: [
                            {
                                ID: 1,
                                __typename: 'Bank',
                                acted_in: [
                                    {
                                        ID: 3,
                                        __typename: 'Bank',
                                        genres: [
                                            {
                                                ID: 5,
                                                __typename: 'Bank',
                                                name: 'Wells Frago'
                                            },
                                            {
                                                ID: 6,
                                                __typename: 'Bank',
                                                name: 'Vanguard'
                                            }
                                        ],
                                        title: 'State Street'
                                    }
                                ],
                                name: 'Morgan Stanley'
                            },
                            {
                                ID: 2,
                                __typename: 'Bank',
                                acted_in: [
                                    {
                                        ID: 3,
                                        __typename: 'Bank',
                                        genres: [
                                            {
                                                ID: 7,
                                                __typename: 'Bank',
                                                name: 'BlackRock'
                                            }
                                        ],
                                        title: 'Trip to the Moon, A (Voyage dans la lune, Le)'
                                    }
                                ],
                                name: 'Goldman Sacs'
                            }
                        ]
                    }
                }}
                layout="graph"
                // style = {{fontSize: 50}}
                renderer="cytoscape"
            />
        </div>
    );
}

export default Index;

