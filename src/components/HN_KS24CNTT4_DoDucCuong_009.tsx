import { Button, Input, message, Modal } from "antd";
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
import { v7 as uuid } from "uuid";

interface vocabulary {
  id: number | string;
  eVocabulary: string;
  vMeaning: string;
}

export default function HN_KS24CNTT4_DoDucCuong_009() {
  const [newEVocabulary, setNewEVocabulary] = useState<string>("");
  const [newVMeaning, setNewVMeaning] = useState<string>("");
  const [vocabularies, setVocabularies] = useState<vocabulary[]>(() => {
    const saved = localStorage.getItem("vocabularies");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("vocabularies", JSON.stringify(vocabularies));
  }, [vocabularies]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newEVocabulary.trim() || !newVMeaning.trim()) {
      message.error("Nội dung không được để trống");
      return;
    }

    const duplicateCheck = vocabularies.some(
      (item) => item.eVocabulary.toLowerCase() === newEVocabulary.toLowerCase()
    );
    if (duplicateCheck) {
      message.error("Từ tiếng Anh này đã tồn tại trong danh sách!");
      return;
    }

    const newWord: vocabulary = {
      id: uuid(),
      eVocabulary: newEVocabulary.trim(),
      vMeaning: newVMeaning.trim(),
    };

    setVocabularies([...vocabularies, newWord]);
    setNewEVocabulary("");
    setNewVMeaning("");
  };

  const handleChangeVM = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewVMeaning(value);
    if (!value.trim()) {
      message.error("Nội dung không được để trống");
    }
  };

  const handleChangeEV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewEVocabulary(value);

    if (!value.trim()) {
      message.error("Nội dung không được để trống");
      return;
    }

    const duplicateCheck = vocabularies.some(
      (item) => item.eVocabulary.toLowerCase() === value.toLowerCase()
    );
    if (duplicateCheck) {
      message.error("Từ vựng đã tồn tại");
    }
  };

  const handleDelete = (id: number | string) => {
    Modal.confirm({
      title: "Xác nhận xóa",
      content: "Bạn có chắc muốn xóa không?",
      okText: "Xóa",
      cancelText: "Hủy",
      onOk: () => {
        const newList = vocabularies.filter((v) => v.id !== id);
        setVocabularies(newList);
      },
    });
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen h-auto border">
        <div className="flex flex-col gap-2.5">
          <div>
            <div className=" font-black text-[30px] border flex justify-center items-center bg-[#2e8b57] h-[60px] rounded-[5px] border-[#f4f7f6]">
              <BookOpen className="w-[60px] h-[35px] text-[#fbfdfb]" />
              <h1 className="text-[#fbfdfb]">Quản Lý Từ Vựng</h1>
            </div>
            <div className="border w-[500px] h-auto p-2 border-[#f4f7f6] flex flex-col rounded-[5px]">
              <div className="flex m-2.5">
                <CirclePlus className="text-[#2e8b57]" />
                <p className="text-[#2e8b57] font-black">Thêm từ mới</p>
              </div>
              <form className="flex m-2.5 gap-2" onSubmit={handleSubmit}>
                <Input
                  placeholder="Từ tiếng Anh"
                  value={newEVocabulary}
                  onChange={handleChangeEV}
                />
                <Input
                  placeholder="Nghĩa tiếng Việt"
                  value={newVMeaning}
                  onChange={handleChangeVM}
                />
                <Button htmlType="submit" className="bg-[#2e8b57] text-white">
                  Thêm
                </Button>
              </form>
            </div>
          </div>

          <div className="border border-[#f4f7f6] rounded-2.5 p-3">
            <div className="flex gap-1">
              <List className="text-[#2e8b57] w-[30px] h-[30px]" />
              <h3 className="text-[20px] font-black text-[#2e8b57]">
                Danh Sách Từ Vựng
              </h3>
            </div>
            <div className="mt-5">
              <table className="w-full text-center">
                <thead>
                  <tr className="bg-[#f8f9fa] border-b-[1px] border-[#f4f7f6]">
                    <th className=" p-2">Từ tiếng Anh</th>
                    <th className=" p-2">Nghĩa tiếng Việt</th>
                    <th className=" p-2">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {vocabularies.map((item, index) => (
                    <tr key={index} className="border-b-[1px] border-[#f4f7f6]">
                      <td className=" p-2">{item.eVocabulary}</td>
                      <td className=" p-2">{item.vMeaning}</td>
                      <td className="flex gap-2 p-2">
                        <button className="flex border border-[#f4f7f6] bg-blue-500 w-[60px] h-[30px] justify-center items-center">
                          <SquarePen className="text-[#fff]" />
                          <span className="text-[#fff]">Sửa</span>
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="flex border border-[#f4f7f6] bg-red-500 w-[60px] h-[30px] justify-center items-center"
                        >
                          <Trash className="text-[#fff]" />
                          <span className="text-[#fff]">Xóa</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center items-center gap-2.5 mt-3">
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
