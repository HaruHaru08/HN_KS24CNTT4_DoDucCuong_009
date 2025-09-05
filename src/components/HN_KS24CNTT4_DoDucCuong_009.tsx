// import React from 'react'

import { Button, Input } from "antd";
// import Column from "antd/es/table/Column";
import {
  BookOpen,
  CirclePlus,
  List,
  MoveLeft,
  MoveRight,
  SquarePen,
  Trash,
} from "lucide-react";
import { useEffect, useState } from "react";

interface vocabulary {
  eVocabulary: string;
  vMeaning: string;
}
export default function HN_KS24CNTT4_DoDucCuong_009() {
  const [newEVocabulary, setNewVocabulary] = useState<string>("");
  const [newVMeaning, setNewVMeaning] = useState<string>("");
  const [arrEVocabulary, setEArrVocabulary] = useState<vocabulary[]>(() => {
    const newarr = localStorage.getItem("eVocabularys");
    return newarr ? JSON.parse(newarr) : [];
  });
  const [arrVVocabulary, setArrVVocabury] = useState<vocabulary[]>(() => {
    const newarr = localStorage.getItem("vVocabularys");
    return newarr ? JSON.parse(newarr) : [];
  });
  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  useEffect(() => {
    localStorage.setItem(newEVocabulary, JSON.stringify("eVocabularys"));
    localStorage.setItem(newEVocabulary, JSON.stringify("vVocabularys"));
  }, [arrVVocabulary, arrEVocabulary]);
  return (
    <>
      <div className="flex justify-center items-center w-screen h-auto border">
        <div className="flex flex-col gap-2.5">
          <div>
            <div className=" font-black text-[30px] border flex justify-center items-center bg-[#2e8b57] h-[60px] rounded-[5px] border-[#f4f7f6]">
              <BookOpen className="w-[60px] h-[35px] text-[#fbfdfb]" />
              <h1 className="text-[#fbfdfb]">Quản Lý Từ Vựng</h1>
            </div>
            <div className="border w-[500px] h-[100px] border-[#f4f7f6] flex flex-col rounded-[5px]">
              <div className="flex m-2.5">
                <CirclePlus className="text-[#2e8b57]" />
                <p className="text-[#2e8b57] font-black">Thêm từ mới</p>
              </div>
              <form className="flex m-2.5 gap-2" onSubmit={handleSumbit}>
                <Input placeholder="Từ tiếng Anh" onChange={handleChange} />
                <Input placeholder="Nghĩa tiếng Việt" onChange={handleChange} />
                <Button className="bg-[#2e8b57]">Thêm</Button>
              </form>
            </div>
          </div>
          <div className="border border-[#f4f7f6] rounded-2.5">
            <div className="flex gap-1">
              <List className="text-[#2e8b57] w-[30px] h-[30px]" />
              <h3 className="text-[20px] font-black text-[#2e8b57]">
                Danh Sách Từ Vựng
              </h3>
            </div>
            <div className="mt-5">
              <table className="flex flex-col gap-5 justify-center items-center">
                <th className="flex gap-5 border-b-[1px] border-[#f4f7f6] bg-[#f8f9fa] w-[400px]">
                  <td>Từ tiếng Anh</td>
                  <td>Nghĩa tiếng Việt</td>
                  <td>Hành Động</td>
                </th>
                <tr className="flex gap-22 border-[#f4f7f6] border-b-[1px]">
                  <td>Apple</td>
                  <td>Quả Táo</td>
                  <td className="flex gap-2">
                    <button className="flex border border-[#f4f7f6] bg-blue-500 w-[50px] h-[30px] justify-center items-center">
                      <SquarePen className="text-[#ffff]" />{" "}
                      <span className="text-[#ffff]">Sửa</span>
                    </button>{" "}
                    <button className="flex border border-[#f4f7f6] bg-red-500 w-[50px] h-[30px] justify-center items-center">
                      <Trash className="text-[#ffff]" />{" "}
                      <span className="text-[#ffff]">Xóa</span>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div className="flex justify-center items-center gap-2.5">
              <MoveLeft className="border bg-[#f8f8f8]" />
              <div>
                <p className="border w-[20px] text-center">1</p>
              </div>
              <MoveRight className="border bg-[#f8f8f8]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
