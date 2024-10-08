import { useEffect, useState, useRef } from "react";
import { getFeedback } from "../../apis/RoadMap";
import SyncLoader from "react-spinners/SyncLoader";

function FeedbackChatbot() {
  const [inputText, setInputText] = useState();
  const [messageList, setMessageList] = useState([]);
  const [waiting, setWaiting] = useState(false);

  const chatBoxRef = useRef(null);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      Send();
    }
  };

  const Send = () => {
    if (!inputText.trim()) return; // 빈 입력 방지
    // messages에 추가
    const inputForm = {
      id: "me",
      msg: inputText,
    };

    setMessageList((prevMessage) => [...prevMessage, inputForm]);

    // api 보내기
    const input = {
      prompt: inputText,
    };
    //챗봇 대답 이미지
    setWaiting(true);
    sendInput(input);
    // 입력창 초기화
    setInputText("");
  };

  const sendInput = async (input) => {
    const response = await getFeedback(input).then((res) => {
      return res.result.feedback;
    });
    const msgForm = {
      id: "chatbot",
      msg: response,
    };
    //챗봇 대답 이미지
    setWaiting(false);

    setMessageList((prevMessage) => [...prevMessage, msgForm]);
  };

  return (
    <div className="mt-[4rem] ml-[3rem] mr-[0.8rem] w-[88%] border rounded-[1rem] shadow p-[0.8rem] min-h-[75%] max-h-[30rem]">
      <div className="overflow-auto h-[19rem] px-[0.5rem]" ref={chatBoxRef}>
        {messageList.length > 0 &&
          messageList.map((message, index) => {
            return (
              <div
                key={index}
                className={`my-[0.4rem] flex justify-${
                  message.id === "me" ? "end" : "start"
                }`}
              >
                {message.id === "me" ? (
                  <div className="bg-[#0046ff] max-w-[70%] px-[0.5rem] py-[0.4rem] rounded-[1rem] text-white">
                    {message.msg}
                  </div>
                ) : (
                  <div>
                    <img
                      className="h-[1.4rem] mb-[0.4rem]"
                      src="/logo/gemini.svg"
                      alt=""
                    />
                    <div className="bg-[#e8e8e8] max-w-[70%] px-[0.5rem] py-[0.4rem] rounded-[1rem] text-black">
                      {message.msg}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        <div>
          {waiting ? (
            <SyncLoader
              size="8"
              speedMultiplier="0.6"
              color="#C4C4C4"
            ></SyncLoader>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="relative w-[100%] flex items-center">
        <input
          className="border rounded-[1rem] w-[100%] h-[2.5rem] px-[0.8rem] py-[0.3rem] my-[0.7rem] focus:outline-none"
          type="text"
          value={inputText}
          placeholder="질문을 입력해주세요."
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={(e) => {
            activeEnter(e);
          }}
        />
        <button
          onClick={() => {
            Send();
          }}
          className="absolute right-[0.4rem] w-[2rem] h-[2rem] rounded-[50%] text-white bg-[#0046ff]"
        >
          {" "}
          ?
        </button>
      </div>
    </div>
  );
}
export default FeedbackChatbot;
