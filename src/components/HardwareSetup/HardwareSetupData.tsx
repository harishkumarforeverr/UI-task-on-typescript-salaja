import Board from "../../images/HardwareSetup/board.svg";
import RightArrow from "../../images/HardwareSetup/rightarrow.svg";
import LeftArrow from "../../images/HardwareSetup/leftarrow.svg";
import CurveArrow from "../../images/HardwareSetup/curvearrow.svg";

const TIBoardHardwareSetupData: any = [
  {
    boardType: 1,
    image: Board,
    steps: [
      {
        id: 0,
        position: [
          { top: "16.6%", left: "41.9%", height: "60%", width: "6%", id: 0 },
          { top: "91.8%", left: "15.7%", height: "6%", width: "9%", id: 0 },
          { top: "91.8%", left: "33.7%", height: "6%", width: "9%", id: 0 },
        ],
        title: "Configure jumpers",
        description: [
          "J1 jumper to POT",
          "J3 jumper to 5V_USB",
          "J5 jumper to 3V3COM",
        ],
      },
      {
        id: 1,
        position: [
          {
            top: "0.3%",
            left: "14.3%",
            height: "14%",
            width: "30%",
            id: 1,
            arrow: [
              {
                image: RightArrow,
                top: "25%",
                left: "11%",
                width: "15%",
              },
              {
                image: RightArrow,
                top: "25%",
                left: "43%",
                width: "15%",
              },
              {
                image: LeftArrow,
                top: "25%",
                left: "74%",
                width: "15%",
              },
            ],
          },
        ],
        title: "Configure toggle switch ",
        description: [
          "S1 to right (RUN)",
          "S2 to left (ABC)",
          "S3 to left (ON)",
        ],
      },
      {
        id: 2,
        position: [
          {
            top: "22%",
            left: "0%",
            height: "19%",
            width: "12%",
            id: 2,
            arrow: [
              {
                image: CurveArrow,
                top: "11%",
                left: "2%",
                width: "35%",
              },
            ],
          },
        ],
        title: "Configure Potentiometer",
        description: ["Rotate R4 potentioment fully clockwise."],
      },
      {
        id: 3,
        position: [
          { top: "24.5%", left: "83%", height: "25%", width: "16%", id: 3 },
        ],
        title: "Configure jumpers",
        description: ["Connect motor phases A,B,C to the EVM on JP"],
      },
      {
        id: 4,
        position: [
          { top: "79%", left: "73.6%", height: "16%", width: "16%", id: 4 },
        ],
        title: "Configure jumpers",
        description: [
          "Connect Voltage Supply (4.5V ~ 35V to: Positve to VBAT Negative to PGND",
        ],
      },
      {
        id: 5,
        position: [
          { top: "67%", left: "4%", height: "16%", width: "7%", id: 5 },
        ],
        title: "Connect USB",
        description: ["Connect the EVM to the PC using a micro-USB cable"],
      },
      {
        id: 6,
        position: [
          { top: "16.6%", left: "41.9%", height: "60%", width: "6%", id: 0 },
          { top: "91.8%", left: "15.7%", height: "6%", width: "9%", id: 0 },
          { top: "91.8%", left: "33.7%", height: "6%", width: "9%", id: 0 },
          {
            top: "0.3%",
            left: "14.3%",
            height: "14%",
            width: "30%",
            id: 1,
            arrow: [
              {
                image: RightArrow,
                top: "25%",
                left: "11%",
                width: "15%",
              },
              {
                image: RightArrow,
                top: "25%",
                left: "43%",
                width: "15%",
              },
              {
                image: LeftArrow,
                top: "25%",
                left: "74%",
                width: "15%",
              },
            ],
          },
          {
            top: "22%",
            left: "0%",
            height: "19%",
            width: "12%",
            id: 2,
            arrow: [
              {
                image: CurveArrow,
                top: "11%",
                left: "2%",
                width: "35%",
              },
            ],
          },
          { top: "24.5%", left: "83%", height: "25%", width: "16%", id: 3 },
          { top: "79%", left: "73.6%", height: "16%", width: "16%", id: 4 },
          { top: "67%", left: "4%", height: "16%", width: "7%", id: 5 },
        ],
        title: "Six Title",
        description: ["Six description"],
      },
    ],
  },
  {
    boardType: 2,
    image: Board,
    steps: [
      {
        id: 0,
        position: [
          { top: 0, left: 0, height: "50px", width: "20px" },
          { top: 0, left: 0, height: "50px", width: "20px" },
        ],
        title: "1 Title",
        description: ["Six description"],
      },
      {
        id: 1,
        position: [{ top: 0, left: 0, height: "50px", width: "20px" }],
        title: "Six Title",
        description: ["Six description"],
      },
    ],
  },
];

export default TIBoardHardwareSetupData;
