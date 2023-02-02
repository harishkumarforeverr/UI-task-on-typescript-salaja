import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import TIBoardHardwareSetupData from "./HardwareSetupData";
import "./HardwareSetup.css";
import DrawerSide from "../Drawer/Drawer";

const HardwareSetup = ({ boardType }: any) => {
  const [focusStep, setFocusStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);

  const filterbyBoardType = TIBoardHardwareSetupData.filter(
    (e: any) => e.boardType === boardType
  );

  const BackBtnHandler = () => {
    setFocusStep(focusStep - 1);
    setPrevStep(focusStep - 1);
  };
  const nextBtnHandler = () => {
    setFocusStep(focusStep + 1);
    setPrevStep(focusStep + 1);
  };
  const skipBtnHandler = () => {
    setFocusStep(filterbyBoardType[0].steps.length - 1);
  };
  const focusHandler = (f: any) => {
    setFocusStep(f.id);
    setPrevStep(f.id);
  };
  const finalBackBtnHandler = () => {
    setFocusStep(prevStep);
  };

  return (
    <DrawerSide>

    
    <Box
      className={
        filterbyBoardType[0].steps.length - 1 === focusStep
          ? "main_wrapper_container"
          : "main_wrapper_container_dark"
      }
    >
      <Box
        className={
          filterbyBoardType[0].steps.length - 1 === focusStep
            ? "wrapper_container"
            : "wrapper_container_dark"
        }
      >
        <Box className="image_container">
          <img
            alt="board_image"
            className="board_image"
            src={filterbyBoardType[0].image}
          />
          <Box
            className={
              filterbyBoardType[0].steps.length - 1 === focusStep
                ? "image_overlay"
                : "image_overlay_dark"
            }
          >
            {filterbyBoardType[0]?.steps
              .filter((e: any) => e.id === focusStep)
              .map((a: any) => {
                return a.position.map((f: any, index: number) => {
                  return (
                    <Box
                      key={index}
                      className={
                        filterbyBoardType[0].steps.length - 1 === focusStep
                          ? "image_focus_dark"
                          : "image_focus"
                      }
                      onClick={() => focusHandler(f)}
                      style={{
                        height: f.height,
                        width: f.width,
                        top: f.top,
                        left: f.left,
                      }}
                    >
                      {f.arrow?.map((element: any, index: number) => {
                        return (
                          <>
                            <img
                              className="arrow_image"
                              alt="arrow"
                              key={index}
                              src={element.image}
                              style={{
                                width: element.width,
                                top: element.top,
                                left: element.left,
                              }}
                            />
                          </>
                        );
                      })}
                    </Box>
                  );
                });
              })}
          </Box>
          {focusStep === filterbyBoardType[0].steps.length - 1 ? null : (
            <Box
              className="message_popup_container"
              sx={{
                top: `${
                  parseInt(
                    filterbyBoardType[0]?.steps[focusStep]?.position[0]?.top
                  ) +
                  parseInt(
                    filterbyBoardType[0]?.steps[focusStep]?.position[0]?.height
                  ) +
                  3
                }%`,
                left: `${
                  parseInt(
                    filterbyBoardType[0]?.steps[focusStep]?.position[0]?.left
                  ) +
                  parseInt(
                    filterbyBoardType[0]?.steps[focusStep]?.position[0]?.width
                  ) +
                  -5
                }%`,
              }}
            >
              <Box className="message_title_container">
                <Box className="message_title">
                  {filterbyBoardType[0].steps[focusStep]?.title}
                </Box>

                <Box className="message_description_container">
                  {filterbyBoardType[0]?.steps[focusStep]?.description.map(
                    (e: string, index: number) => {
                      return <Box key={index}>{e}</Box>;
                    }
                  )}
                </Box>
              </Box>

              <Box className="message_popup_btn_container">
                {focusStep !== 0 ? (
                  <Button
                    className="back_button"
                    variant="outlined"
                    color="error"
                    onClick={() => BackBtnHandler()}
                  >
                    Back
                  </Button>
                ) : null}
                <Button
                  className="next_button"
                  variant="contained"
                  onClick={() => nextBtnHandler()}
                  disabled={filterbyBoardType[0].steps.length - 1 === focusStep}
                >
                  Next
                </Button>
                <Button
                  className="skip_button"
                  variant="contained"
                  onClick={() => skipBtnHandler()}
                >
                  Skip
                </Button>
              </Box>
            </Box>
          )}
          <Box className="finish_button_container">
            {filterbyBoardType[0].steps.length - 1 === focusStep ? (
              <>
                <Button
                  className="finish_back_button"
                  variant="outlined"
                  color="error"
                  onClick={() => finalBackBtnHandler()}
                >
                  Back
                </Button>
                <Button
                  className="finish_button"
                  variant="contained"
                  onClick={() => skipBtnHandler()}
                >
                  Finish
                </Button>
              </>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
    </DrawerSide> 
  );
};

export default HardwareSetup;
