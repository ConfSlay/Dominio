import React from 'react';
import { useState, useEffect } from "react";

type Properties = {
    matrixWidth?: number,
    matrixHeight?: number,
    backgroundColor?: string,
    fontFamilyAndSize?: string,
    fontColor?: string,
}

const Matrix = ({matrixWidth = document.body.offsetWidth,//window.innerWidth;
    matrixHeight = document.body.offsetHeight,//window.innerHeight;
    backgroundColor = "#000",
    fontFamilyAndSize = "20px Matrix",
    fontColor = '#4a444f'}:Properties) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const canvas: HTMLCanvasElement | null  = document.querySelector("#matrixCanvas");
        if (canvas) {
            const canvasContext = canvas.getContext('2d');
            const width: number= matrixWidth;
            const height: number = matrixHeight;
            const cols: number = Math.floor(width / 20) + 1;
            const ypos = Array(cols).fill(0);
            if (canvasContext) {
                canvasContext.fillStyle = backgroundColor;
                canvasContext.fillRect(0, 0, width, height);
                let count: number=0;
                // Every {x = delay} seconds, component state is refreshed
                // calling matrix function
                const matrixRefreshValue = 80;
                const interval = setInterval(() => {
                    setCount(count+1);
                    matrix(canvasContext,width,height,ypos)
                }, matrixRefreshValue);
                return () => {
                    clearInterval(interval);
                };

            }   
        }
    });

    return (
    <>
        <canvas id="matrixCanvas" width={matrixWidth} height={matrixHeight}></canvas>
        <div className='overCanvas'></div>
    </>

    )

    function matrix (canvasContext: CanvasRenderingContext2D,
        width: number,
        height: number,
        ypos: any,
        ): void {

        // Draw a semitransparent black rectangle on top of previous drawing
        canvasContext.fillStyle = '#0001';
        canvasContext.fillRect(0, 0, width, height);

        // Set color to green and font to matrix
        canvasContext.fillStyle = fontColor; 
        canvasContext.font = fontFamilyAndSize; 
        
        ypos.forEach((y: any, ind: any) => {
        const charactersList = 'abcdefghijklmnopqrstuvwxyz0123456789,;!()&#?%'; //ABCDEFGHIJKLMNOPQRSTUVWXYZ
        const character = charactersList.charAt(Math.floor(Math.random() * charactersList.length));


        // x coordinate of the column, y coordinate is already given
        const x = ind * 20;
        canvasContext.fillText(character, x, y);
        
        // randomly reset the end of the column if it's at least 100px high
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        // otherwise just move the y coordinate for the column 20px down,
        else ypos[ind] = y + 20;
        });
    }
}
  
export default Matrix;







