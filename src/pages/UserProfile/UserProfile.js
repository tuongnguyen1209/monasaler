import React, { useContext, useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { Uploadfile } from "../../apis/UploadImg";
import { UserApis } from "../../apis/UserApis";
import Button from "../../compoents/Button/Button";
import { WapperForm } from "../../compoents/Form/FormStyles2";
import Spinners from "../../compoents/Spinners/Spinners";
import SubHeader from "../../compoents/SubHeader/SubHeader";
import Tabs from "../../compoents/Tabs/Tabs";
import { UserContext } from "../../contexts/UserContext";
import { WrapUserProfile } from "./UserProfileStyle";

function UserProfile() {
  const [tabs, setTabs] = useState([
    { id: 1, name: "Thông tin chung", active: true },
    { id: 2, name: "Đổi mật khẩu", active: false },
  ]);
  const { user, setUser, logout } = useContext(UserContext);
  const [showLoading, setShowLoading] = useState(false);
  const [userChange, setUserChange] = useState({ ...user });
  const [changePass, setChangePass] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPass: "",
  });
  const [ischangeUser, setIsChangeUser] = useState(false);
  const [preview, setPreview] = useState();
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    setUserChange(user);
  }, [user._id]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
    setIsChangeUser(true);
  };

  const changeAction = (index) => {
    const newListAction = [...tabs];
    for (let i = 0; i < tabs.length; i++) {
      const element = tabs[i];
      if (i === index) {
        element.active = true;
      } else {
        element.active = false;
      }
    }
    setTabs(newListAction);
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    const newUserChange = { ...userChange };
    newUserChange[name] = value;
    setUserChange(newUserChange);
    setIsChangeUser(true);
  };

  const handleChangePass = (e) => {
    const { name, value } = e.target;
    const newPass = { ...changePass };
    newPass[name] = value;
    setChangePass(newPass);
  };

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    if (!ischangeUser) return;
    if (!window.confirm("Bạn có muốn lưu những thay đổi trên?")) return;
    setShowLoading(true);

    if (selectedFile) {
      const newData = { ...userChange };
      Uploadfile(selectedFile)
        .then((result) => {
          newData["image"] = result.url;
          return newData;
        })
        .then((result) => {
          return UserApis.updateMe(result);
        })
        .then((result) => {
          setUser(result.data.updatedUser);
          NotificationManager.success(
            "Đã lưu lại thay đổi",
            "Thành công",
            1000
          );
        })
        .catch((err) => {
          console.log(err);
          NotificationManager.error(
            "Có lỗi xảy ra, mời bạn thử lại sau!!!",
            "Thất bại",
            1000
          );
        })
        .finally(() => {
          setShowLoading(false);
        });
    } else {
      UserApis.updateMe(userChange)
        .then((result) => {
          console.log(result);
          setUser(result.data.updatedUser);
          NotificationManager.success(
            "Đã lưu lại thay đổi",
            "Thành công",
            1000
          );
        })
        .catch((err) => {
          console.log(err);
          NotificationManager.error(
            "Có lỗi xảy ra, mời bạn thử lại sau!!!",
            "Thất bại",
            1000
          );
        })
        .finally(() => {
          setShowLoading(false);
        });
    }
  };

  const handleSubmitChangePass = (e) => {
    e.preventDefault();
    // console.log(changePass);
    if (changePass.confirmPass !== changePass.newPassword) {
      NotificationManager.error("Hai mật khẩu phải giống nhau!!!");
    } else {
      const newPassChange = { ...changePass };
      delete newPassChange.confirmPass;
      setShowLoading(true);
      UserApis.changePass(newPassChange)
        .then((result) => {
          NotificationManager.success(
            "Thay đổi mật khẩu thành công, vui lòng đăng nhập lại!"
          );
          logout();
        })
        .catch((err) => {
          NotificationManager.error("Đổi mật khẩu thất bại");
        })
        .finally(() => {
          setShowLoading(false);
        });
    }
  };

  const handelResetValue = () => {
    setIsChangeUser(false);
    setPreview(null);
    setSelectedFile(undefined);
    setUserChange({ ...user });
  };

  return (
    <>
      <WrapUserProfile>
        <SubHeader>Sửa thông tin cá nhân</SubHeader>
        <Tabs tabs={tabs} setTabs={setTabs} />

        <div className="wrap-info">
          {tabs[0].active && (
            <>
              <div className="wrap-img">
                {userChange.image && !preview && (
                  <img src={user.image} alt="user" />
                )}
                {preview && <img src={preview} alt="user" />}

                <label className="button-edit" htmlFor="input-file">
                  <i className="fas fa-pen"></i>
                </label>
                <input
                  type="file"
                  id="input-file"
                  className="input-file"
                  onChange={onSelectFile}
                />
              </div>
              <WapperForm onSubmit={handleSubmitInfo}>
                <div className="form-group">
                  <label>Tên đăng nhập </label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={userChange.username}
                  />
                </div>
                <div className="form-group">
                  <label>Tên </label>
                  <input
                    type="text"
                    className="form-control"
                    value={userChange.fullname}
                    name="fullname"
                    onChange={changeInput}
                  />
                </div>
                <div className="form-inline " style={{ margin: "2rem 0" }}>
                  <label>Giới tính </label>
                  <label>
                    <input
                      type="radio"
                      name="sex"
                      checked={userChange.sex === "Nam"}
                      value="Nam"
                      onChange={changeInput}
                    />
                    Nam
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sex"
                      checked={userChange.sex === "Nữ"}
                      value="Nữ"
                      onChange={changeInput}
                    />
                    Nữ
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sex"
                      value=""
                      checked={!userChange.sex}
                      onChange={changeInput}
                    />
                    Khác
                  </label>
                </div>
                <div className="form-group">
                  <label>Email </label>
                  <input
                    type="text"
                    className="form-control"
                    value={userChange.email}
                    name="email"
                    onChange={changeInput}
                  />
                </div>
                <div className="form-group">
                  <label>Số điện thoại </label>
                  <input
                    type="text"
                    className="form-control "
                    value={userChange.phone}
                    onChange={changeInput}
                    name="phone"
                  />
                </div>
                {!showLoading && (
                  <div className="form-group text-center">
                    <Button
                      onClick={handelResetValue}
                      type="button"
                      color="var(--color-grey-dark-1)"
                    >
                      Đặt lại
                    </Button>
                    <input id="btn-submit" type="submit" value="Lưu" />
                  </div>
                )}
                <Spinners show={showLoading} />
              </WapperForm>
            </>
          )}
          {tabs[1].active && (
            <>
              <h4>Đổi mật khẩu</h4>

              <WapperForm onSubmit={handleSubmitChangePass}>
                <div className="form-group">
                  <label>Mật khẩu cũ</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleChangePass}
                    value={changePass.currentPassword}
                    name="currentPassword"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Mật khẩu mới</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleChangePass}
                    value={changePass.newPassword}
                    name="newPassword"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Xác nhận mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleChangePass}
                    value={changePass.confirmPass}
                    name="confirmPass"
                    required
                  />
                </div>
                {!showLoading && (
                  <div className="form-group text-center">
                    <input id="btn-submit-2" type="submit" value="Lưu" />
                  </div>
                )}
                <Spinners show={showLoading} />
              </WapperForm>
            </>
          )}
        </div>
      </WrapUserProfile>
    </>
  );
}

export default UserProfile;
