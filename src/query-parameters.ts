const query_parameters = (
  mini_app_id: string,
  data: any,
  version: number,
  short: boolean
) => {
  // data =  { newUser: "true", user_name: "togtokh", id: "2131" }
  // query_parameters('MINI_PROGRAM Obj id',  data)
  data = { use_query: true, ...data };
  const app_link = `https://link.toki.mn/?link=https://toki.mn/MINI_PROGRAM/${mini_app_id}/?this_param_text&apn=com.toki.mn&isi=1504679492&ibi=com.toki.mn&efr=1`;
  let query_text = "queryPath%3D";
  for (var i in data) {
    let text = data[i];
    if (typeof data[i] == "string") {
      text = data[i]?.replace(" ", "+") || data[i];
    }
    query_text = query_text + `%26${i}%3D${text}`;
  }
  const result = app_link.replace("this_param_text", query_text);
  //
  return { result };
};

export default query_parameters;
