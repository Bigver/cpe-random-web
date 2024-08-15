import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const RandomPage = () => {
  const [content, setContent] = useState([]);
  const [inputId, setInputId] = useState();
  const [matchedData, setMatchedData] = useState(null);
  const data = 'https://script.googleusercontent.com/macros/echo?user_content_key=x6puj0loFhFGGPsNHWFGKiapXYnJlDu3z2sWWN8t96UQnrXAEFJoV52FDojNkstlgeHbkk3fRpPH6UFenmQUsFWWwFlyQ3unm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLnYrbepk56WCEf2dpDEhqSEC7KH5wqkKYHbHqY2a0-NNTP6a8326m-iR3TmVmGeLBoyQmo2h4t0HfgjQ-feo92fsPYm7PZuuNz9Jw9Md8uu&lib=MI4iJVG1pi4aooeeEN1zRfWDRu-MpyHbQ'
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `${data}`
        );
        setContent(res.data);
      } catch (err) {}
    };
    getData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const foundData = content.find(
      (item) => item.รหัสนิสิตน้อง === parseInt(inputId)
    );
    if (foundData) {
      setMatchedData(foundData);
      Swal.fire({
        title: matchedData.คำใบ้[2].ข้อความ,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        background: "#fff", // กำหนดสีพื้นหลังของ popup
        confirmButtonColor: "#444", // กำหนดสีปุ่ม confirm
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    } else {
      setMatchedData(null);
      Swal.fire({
        title: "ไม่พบคำใบ้",
        background: "#fff", // กำหนดสีพื้นหลังของ popup
        confirmButtonColor: "#444", // กำหนดสีปุ่ม confirm
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    }
  };

  return (
    <div className="app-ctn">
      <div className="circle-ctn">
        <div className="circle" style={{ backgroundColor: "red" }}></div>
        <div className="circle" style={{ backgroundColor: "yellow" }}></div>
        <div className="circle" style={{ backgroundColor: "green" }}></div>
      </div>
      <div class="noise"></div>
      <div class="overlay"></div>
      <div className="app">
        <div className="content">
          <div class="wrapper">
            <div class="typing-demo">ยินดีต้อนรับสู่กิจกรรมรับน้อง CPE...</div>
          </div>
          <div className="form">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor=""> - </label>
              <input
                type="number"
                placeholder="กรอกรหัสนิสิต"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
              />
              <button>รับคำใบ้</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomPage;
