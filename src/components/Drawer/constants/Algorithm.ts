import MCF from "./MCF8316B_RAM_PG .json";

export const getAvailabeSettings = () => {
  const AlgorithmVariables = MCF.register.filter(
    (obj) => obj.ip_name === "Algorithm Variables"
  );
  const Availablesetting: any = [];
  AlgorithmVariables.forEach((obj: any) => {
    obj.bit_field.filter((bitsObj: any) => {
      if (bitsObj.settings.length > 0) {
        Availablesetting.push(obj);
      }
    });
  });
  let availableMotors: any = [];
  Availablesetting.forEach((obj: any) => {
    obj.bit_field.forEach((argBits: any) => {
      availableMotors = [...availableMotors, ...argBits.settings];
    });
  });

  console.log("AlgorithmVariables", Availablesetting, availableMotors);

  return availableMotors;
};
//
// {value: '00101b ', description: ' MOTOR_SLOW_FIRST_CYCLE'}
