import supportMaster from "../src";
const run = async () => {
  const results = await supportMaster.level.levelInfo(1800867.4999999998);
  console.log(results);
  // console.log("object");
  // const body = {
  //   find_product: "PUBG MOBILE",
  // };
  // const app = "63a2afd4f01b4ee2f108212d";
  // const result = supportMaster.query_parameters(app.toString(), body, 1, true);
  // console.log(result);
};
run();
