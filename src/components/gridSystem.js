import React from "react";
import {Container,Row,Col} from "react-bootstrap";


export const  GridSystem = ({colCount, children, md, sm,lg}) => {
    let rowCount = Math.floor(children.length / colCount) + 1

    //Index is needed to keep track of the current element that we are one.
    let index = 0

    //This is the driver function for building the grid system.
    const buildGrid = () => {
        return (
            renderRows()
        )
    }

    //Returns For example, we can have a row with 2 columns inside it.
    const renderRows = () => {
        let rows = []
        
        for(let row = 0; row < rowCount; row++) {
            rows.push(
                <Row className='Row' key = {row}>
                    {
                        renderCols()
                    }
                </Row>
            )
        }
        
        return rows
    }
    const renderCols = () => {
        let cols = []
        
        //If you want to add more bootstrap breakpoints you can pass them as props here.
        for(let col = 0; col < colCount; col++) {
            if(index < children.length) {
                cols.push(
                    <Col className='Col' md={md} sm={sm} lg={lg}>
                        {children[index]}
                    </Col>
                )
                index++
            }
        }  
        return cols
    }

    return (
        <Container>
            {
                buildGrid()
            }
        </Container>
    );
};