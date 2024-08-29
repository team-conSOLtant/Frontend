import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  getProductList,
  createAccount,
  checkAccount,
  issueAccount,
  checkMessage,
  createAccountInfo,
} from "../apis/Login";

function AccountInfoPage() {
  const [product, setProduct] = useState("");
  const [work, setWork] = useState(null);
  const [hasAccount, setHasAccount] = useState(null);
  const [productList, setProductList] = useState();
  const [accountNo, setAccountNo] = useState();
  const [transactionUniqueNo, setTransactionUniqueNo] = useState();
  const [numOne, setNumOne] = useState();
  const [numTwo, setNumTwo] = useState();
  const [numThree, setNumThree] = useState();
  const [numFour, setNumFour] = useState();
  const [approved, setApproved] = useState(null);
  const [company, setCompany] = useState();
  const [salary, setSalary] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [isError, setIsError] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  // const email = location.state.email;

  useEffect(() => {
    setHasAccount(location.state.hasAccount);
    try {
      getProductList({ productType: "DEMAND_DEPOSIT" }).then(async (data) => {
        await setProductList(data.result);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (approved) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [setAccountNo, setApproved]);

  const submit = async () => {
    if (approved) {
      setIsError(false);
      // 학교 데이터 넘기기
      const info = {
        isEmployed: work,
        salary: salary,
        corporateName: company,
        accountNo: accountNo,
      };
      const response = await createAccountInfo(info);
      if (response.success) {
        navigate("/all-complete");
      } else {
        setErrorMessage("계좌정보 입력에 실패했습니다.");
        setIsError(true);
      }
    } else {
      setErrorMessage("계좌 인증을 해주세요");
      setIsError(true);
    }
  };

  const makeAccount = () => {
    const type = { accountTypeUniqueNo: product };
    createAccount(type).then(async (res) => {
      await setAccountNo(res.result.accountNo);
    });
  };

  const checkOneWon = async () => {
    try {
      // 1원 송금
      const account = { accountNo: accountNo };
      const issueResponse = await issueAccount(account);

      await setTransactionUniqueNo(issueResponse.result.transactionUniqueNo);

      console.log(issueResponse.result.transactionUniqueNo);

      // 1원 송금 메시지 확인
      const accountInfo = {
        accountNo: accountNo,
        transactionUniqueNo: issueResponse.result.transactionUniqueNo,
      };

      const checkResponse = await checkMessage(accountInfo);
      await console.log(checkResponse.result.transactionSummary);
      await window.alert(
        `인증번호 : ${checkResponse.result.transactionSummary.split(" ")[1]}`
      );

      // await setCheckNoAnswer(checkResponse.result.transactionSummary);
    } catch (error) {
      console.error("Error in checkOneWon:", error);
    }
  };

  // 인증번호 확인
  const checkNum = async () => {
    const insertNum = `${numOne}${numTwo}${numThree}${numFour}`;
    const checkInfo = {
      accountNo: accountNo,
      authText: "SSAFY",
      authCode: insertNum,
    };
    const response = await checkAccount(checkInfo);
    if (response) {
      await setApproved(response.success);
    } else {
      console.log(response);
      await setApproved(response);
    }
  };

  return (
    <div>
      {/* 좌측 상단 로고 */}
      <div
        className="flex items-center m-[2rem] cursor-pointer"
        onClick={() => navigate("/login")}
      >
        <img className="w-[2rem]" src="/logo/shinhan_logo_blue.png" alt="" />
        <div className="text-[#5C5C5C] font-OneShinhanBold text-[1.2rem] px-[0.6rem]">
          SOL 학생 로드맵
        </div>
      </div>
      {/* 회원정보 입력란 */}
      <div className="h-[80vh] flex flex-col justify-center items-center scale-110">
        <div className="h-[1rem] w-[50%] max-w-[25rem] min-w-[20rem] mb-[4rem] flex flex-col items-center">
          <div className="text-[1.5rem] text-[#0046ff] font-OneShinhanMedium">
            {hasAccount ? "계좌 연결이 필요해요" : "통장 개설이 필요해요"}
          </div>
          <div className="text-[0.8rem] text-[#444444]">
            고객님의 금융 로드맵 설계를 위해서 계좌 연결이 필요해요.
          </div>
          {/* <div className="w-[48%] h-[0.8rem] bg-[#D3E1FB]"></div>
          <div className="w-[48%] h-[0.8rem] bg-[#D9D9D9]"></div> */}
        </div>
        <div className="border rounded-[1rem] shadow-lg p-[1.5rem] w-[50%] max-w-[25rem] min-w-[20rem] ">
          <div className="flex flex-col justify-center items-center">
            {hasAccount ? (
              <div></div>
            ) : (
              <>
                {/* 상품 선택 */}
                <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
                  <div className="w-[20%] min-w-[7rem]">상품 선택</div>
                  <select
                    className="border text-[#8F8F8F] rounded-[0.2rem] w-[20rem] min-w-[5rem] p-[0.2rem] text-[0.8rem] focus:outline-none"
                    name="product"
                    id="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  >
                    <option value="">상품 선택하기</option>
                    {productList &&
                      productList.map((item, index) => (
                        <option key={index} value={item.accountTypeUniqueNo}>
                          {item.bankName} | {item.accountDescription}
                        </option>
                      ))}
                  </select>
                  <button
                    onClick={makeAccount}
                    className="border min-w-[4rem] p-[0.2rem] text-[0.8rem] rounded-[0.2rem] ml-[0.3rem]"
                  >
                    생성하기
                  </button>
                </div>
              </>
            )}
            {/* 계좌 번호 */}
            <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
              <div className="w-[20%] min-w-[7rem]">신한은행 계좌</div>
              <input
                type="text"
                value={accountNo}
                className="border rounded-[0.2rem] w-[20rem] min-w-[5rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
              />
              <button
                onClick={checkOneWon}
                className="border min-w-[4rem] p-[0.2rem] text-[0.8rem] rounded-[0.2rem] ml-[0.3rem]"
              >
                인증하기
              </button>
            </div>
            {/* 인증 메시지 */}
            <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
              <div className="w-[20%] min-w-[7rem]">인증 번호</div>
              <div className="w-[30rem] flex justify-between">
                <input
                  type="text"
                  onChange={(e) => setNumOne(e.target.value)}
                  className="border rounded-[0.2rem] w-[2rem] p-[0.2rem] text-[1rem] text-center font-OneShinhanMedium focus:outline-none"
                />
                <input
                  type="text"
                  onChange={(e) => setNumTwo(e.target.value)}
                  className="border rounded-[0.2rem] w-[2rem] p-[0.2rem] text-[1rem] text-center font-OneShinhanMedium focus:outline-none"
                />
                <input
                  type="text"
                  onChange={(e) => setNumThree(e.target.value)}
                  className="border rounded-[0.2rem] w-[2rem] p-[0.2rem] text-[1rem] text-center font-OneShinhanMedium focus:outline-none"
                />
                <input
                  type="text"
                  onChange={(e) => setNumFour(e.target.value)}
                  className="border rounded-[0.2rem] w-[2rem] p-[0.2rem] text-[1rem] text-center font-OneShinhanMedium focus:outline-none"
                />

                <button
                  onClick={checkNum}
                  className="border w-[3rem] p-[0.2rem] text-[0.8rem] rounded-[0.2rem] ml-[0.3rem]"
                >
                  확인
                </button>
              </div>
            </div>
            {/* {approved ? (
                <div className="text-[0.7rem] text-green-500">
                  인증되었습니다.
                </div>
              ) : (
                <div className="text-[0.7rem] text-red-500">
                  인증에 실패 했습니다.
                </div>
              )} */}
            {approved !== null &&
              (approved ? (
                <div className="text-[0.7rem] text-green-500">
                  인증되었습니다.
                </div>
              ) : (
                <div className="text-[0.7rem] text-red-500">
                  인증에 실패 했습니다.
                </div>
              ))}
            {/* 취업 여부 */}
            <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
              <div className="w-[20%] min-w-[7rem]">취업 여부</div>
              <select
                className="border text-[#8F8F8F] rounded-[0.2rem] w-[30rem] p-[0.2rem] text-[0.8rem] focus:outline-none"
                name="work"
                id="work"
                value={work}
                onChange={(e) => setWork(e.target.value)}
              >
                <option value=""></option>
                <option value="true">예</option>
                <option value="false">아니오</option>
              </select>
            </div>
            {/* 월급 취업한 경우만 받음 */}
            {work && work === "true" ? (
              <>
                <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
                  <div className="w-[20%] min-w-[7rem]">재직중인 회사</div>
                  <div className="relative w-[30rem]">
                    <input
                      type="text"
                      onChange={(e) => setCompany(e.target.value)}
                      className="border rounded-[0.2rem] w-full p-[0.2rem] pr-[1.8rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
                    />
                  </div>
                </div>
                <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
                  <div className="w-[20%] min-w-[7rem]">월급</div>
                  <div className="relative w-[30rem]">
                    <input
                      type="text"
                      onChange={(e) => setSalary(e.target.value)}
                      className="border text-right rounded-[0.2rem] w-full p-[0.2rem] pr-[1.8rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
                    />
                    <div className="absolute top-[0.2rem] right-[0.7rem]">
                      원
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            {/* 다음으로 */}
            <div
              onClick={submit}
              className="mt-[3rem] py-[0.3rem] w-[100%] cursor-pointer font-OneShinhanMedium shadow-md border rounded-[0.5rem] flex justify-center bg-[#0046ff] text-white"
            >
              완료
            </div>
            {/* 계좌 정보 입력 실패 */}
            {isError && (
              <div className="my-[0.5rem] flex justify-center w-[40%] max-w-[35rem] min-w-[25rem] text-[0.9rem]">
                <div className="text-red-500">{errorMessage}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfoPage;
