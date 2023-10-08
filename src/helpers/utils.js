import { useLocation } from "react-router-dom";

class Utils {
  static formatAddress(address = []) {
    return address.length > 0
      ? address[0]?.subdistrict?.name + ", " + address[0]?.province?.name
      : "tidak tersedia";
  }

  static doctorPrice(price = [], type = "booking") {
    return price.length > 0 ? price.find((el) => el.type == type)?.price : 0;
  }

  static useQuery(key) {
    // Use get method to retrieve queryParam
    return new URLSearchParams(useLocation().search).get(key);
  }
}

export default Utils;
