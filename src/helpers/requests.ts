import axios from "axios";

export const request = async (
  url: string,
  method: "GET" | "POST",
  data?: {}
) => {
  try {
    const res = await axios({
      method,
      url,
      data,
    });

    return res.data;
  } catch (err: unknown) {
    throw new Error("Something went wrong");
  }
};
