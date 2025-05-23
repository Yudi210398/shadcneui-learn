import { useCallback, useState } from "react";
import HttpError from "./http-error";

export function useHttp() {
  const [errorValidate, setErrorValidate] = useState(false);

  const [pesanVerify, setPesanVerify] = useState("");
  const sendReq = useCallback(
    async (
      url: string,
      method = "GET",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body: Record<string, any> | null = null,
      headers: HeadersInit = {}
    ) => {
      try {
        const respone = await fetch(url, {
          method,
          body: method === "GET" ? null : JSON.stringify(body),
          headers: {
            "Content-Type": "application/json", // Tambahkan header jika ada body
            ...headers, // Gabungkan dengan headers tambahan
          },
          credentials: "include",
        });

        const respondata = await respone.json();
        if (!respone.ok || respone.status === 500 || respondata["error"])
          throw new HttpError(respondata.message, respondata.statusCode);

        return respondata;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setErrorValidate(true);
        setPesanVerify(err.message);
        throw err;
      }
    },
    []
  );

  return {
    pesanVerify,
    errorValidate,
    sendReq,
    setErrorValidate,
  };
}
