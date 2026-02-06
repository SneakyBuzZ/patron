import { PinataSDK } from "pinata";
import { PINATA_GATEWAY_URL } from "./constant";

const pinata = new PinataSDK({
  pinataGateway: PINATA_GATEWAY_URL,
});

export async function uploadToIPFS(file: File) {
  const upload = await pinata.upload.public.file(file);

  const gatewayUrl = await pinata.gateways.public.convert(upload.cid);

  return {
    cid: upload.cid,
    url: gatewayUrl,
  };
}

export async function uploadJSONToIPFS(json: unknown) {
  const blob = new Blob([JSON.stringify(json)], {
    type: "application/json",
  });

  const file = new File([blob], "metadata.json");

  return uploadToIPFS(file);
}
