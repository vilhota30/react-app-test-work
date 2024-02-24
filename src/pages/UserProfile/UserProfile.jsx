import { useEffect, useState } from 'react';
import {
    SaveButton,
    EditProfileButton,
    H2,
    Label,
    ListItem,
    LogoutButton,
    Section,
    Span,
    StyledList,
    UserCardWrapper,
    UserProfileImage,
    Wrapper,
    EditButton,
    EditExit,
    SvgIcon,
    FileWrapper,
    UserAvatar,
    StyledDatePicker,
    InputFile,
    LoaderWrapper,
  } from './UserProfile.styled';
import { ReactComponent as Edit } from '../../images/icons/edit.svg';
import { ReactComponent as CrossSmall } from '../../images/icons/cross-smal.svg';
import { ReactComponent as Logout } from '../../images/icons/logout.svg';
import { ReactComponent as PhotoDef } from '../../images/icons/photo-default.svg';
import { ReactComponent as Camera } from '../../images/icons/camera.svg';
import { CiCirclePlus } from "react-icons/ci";
import { ReactComponent as X } from '../../images/icons/x.svg';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Backdrop from '../../components/Backdrop/Backdrop';
import ModalApproveAction from '../../components/ModalApproveAction/ModalApproveAction';
import { useAuth } from '../../components/hooks/useAuth';
import VortexLoader from '../../components/VortexLoader/VortexLoader';

function UserPage() {
    const [clicked, setClicked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [currentName, setCurrentName] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');
    const [currentBday, setCurrentBday] = useState('');
    const [currentPhone, setCurrentPhone] = useState('');
    const [currentCity, setCurrentCity] = useState('');
    const [image, setSelectedImage] = useState(null);
    const [fileImage, setFileImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [showModal, setShowModal] = useState(null);
    const { profilePic } = useAuth();
    const { isLoading } = useAuth();
    const token = useSelector((state) => state.auth.token);
  
    const noDataPlaceHolder = 'No info';
  
    const toggleForm = (e) => {
      e.preventDefault();
      setClicked(!clicked);
    };
    const onUserNameChange = (e) => {
      setCurrentName(e.target.value);
    };
    const onUserEmailChange = (e) => {
      setCurrentEmail(e.target.value);
    };
    // const onUserBdayChange = (e) => {
    //   setCurrentBday(e.target.value);
    // };
    const onUserPhoneChange = (e) => {
      const inputValue = e.target.value;
      const cleanedValue = inputValue.replace(/[^\d()]/g, '');
      setCurrentPhone(cleanedValue);
    };
    const onUserCityChange = (e) => {
      setCurrentCity(e.target.value);
    };
    const submitForm = async (e) => {
      e.preventDefault();
      const editedUserFormData = new FormData();
  
      editedUserFormData.append('username', currentName);
      editedUserFormData.append('email', currentEmail);
      editedUserFormData.append('birthDay', currentBday);
      editedUserFormData.append('phone', currentPhone);
      editedUserFormData.append('city', currentCity);
      if (image) {
        editedUserFormData.append('image', fileImage);
      }
  
      // const response = dispatch(update({ token, editedUserFormData }));
      setSelectedImage(null);
      setFileImage(null);
      setClicked(false);
      setEdit(false);
    };
    const handleEdit = (e) => {
      e.preventDefault();
      setEdit(true);
    };
    const handleEditExit = (e) => {
      e.preventDefault();
      setSelectedImage(null);
      setFileImage(null);
      setEdit(false);
    };
    // const onDelete = async (id) => {
    //   try {
    //     const response = await axios.delete(
    //       `${import.meta.env.VITE_BACKEND_BASE_URL}/api/myPet/${id}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       },
    //     );
    //     setPets((prevPets) => prevPets.filter((pet) => pet._id !== id));
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };
  
    useEffect(() => {
      setImageUrl(profilePic);
    }, [profilePic]);
  
    useEffect(() => {
      const getPets = async () => {
        try {
          // const response = await axios.get(
          //   `${import.meta.env.VITE_BACKEND_BASE_URL}/api/myPet`,
          //   {
          //     headers: {
          //       'Content-Type': 'multipart/form-data',
          //       Authorization: `Bearer ${token}`,
          //     },
          //   },
          // );
          // setPets(response.data.data.response.docs);
        } catch (error) {
          console.error('Error fetching user:', error);
          return null;
        }
      };
      const getUser = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth/current`,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
              },
            },
          );
          return response.data;
        } catch (error) {
          console.log('Error fetching user:', error);
          return null;
        }
      };
  
      const fetchUserAndSetCurrentUser = async () => {
        const user = await getUser();
        if (user) {
          const { username, email, birthDay, phone, city, profilePic } = user;
  
          setCurrentName(username || noDataPlaceHolder);
          setCurrentEmail(email || noDataPlaceHolder);
          setCurrentPhone(phone || noDataPlaceHolder);
          setCurrentCity(city || noDataPlaceHolder);
          setImageUrl(profilePic || '');
          setCurrentBday(birthDay || '');
        }
      };
  
      fetchUserAndSetCurrentUser();
      getPets();
    }, [token]);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const urlImage = URL.createObjectURL(file);
        setSelectedImage(urlImage);
        setFileImage(file);
      }
    };
  
    return (
      <>
        <Wrapper>
          <Section>
            <H2>My information:</H2>
  
            <UserCardWrapper>
              {isLoading && (
                <LoaderWrapper>
                  <VortexLoader />
                </LoaderWrapper>
              )}
              <UserProfileImage>
                {imageUrl ? (
                  <UserAvatar src={imageUrl} alt="User picture" />
                ) : (
                  <PhotoDef />
                )}
  
                {clicked &&
                  (edit ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        position: 'absolute',
                        bottom: '-36px',
                        left: '20px',
                      }}
                    >
                      <FileWrapper>
                        {image ? (
                          <img
                            src={image}
                            alt="Selected"
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: '25px',
                            }}
                          />
                        ) : (
                          <>
                            <SvgIcon width="24" height="24">
                              <CiCirclePlus />
                            </SvgIcon>
                            <InputFile
                              type="file"
                              onChange={handleFileChange}
                              name="image"
                            />
                          </>
                        )}
                      </FileWrapper>
                      <EditExit onClick={handleEditExit}>
                        Cancel photo <X />
                      </EditExit>
                    </div>
                  ) : (
                    <EditButton onClick={handleEdit} type="button">
                      <Camera />
  
                      <span>Edit photo</span>
                    </EditButton>
                  ))}
              </UserProfileImage>
              <StyledList>
                <ListItem>
                  <Label>Name:</Label>
                  <Span
                    type="text"
                    name="name"
                    value={currentName}
                    disabled={!clicked}
                    onChange={onUserNameChange}
                  ></Span>
                </ListItem>
                <ListItem>
                  <Label>Email:</Label>
                  <Span
                    type="email"
                    name="email"
                    value={currentEmail}
                    disabled={!clicked}
                    onChange={onUserEmailChange}
                  ></Span>
                </ListItem>
                <ListItem>
                  <Label>Birthday:</Label>
                  <StyledDatePicker
                    type="text"
                    name="birthday"
                    // placeholderText='Select a date'
                    selected={currentBday ? new Date(currentBday) : null}
                    disabled={!clicked}
                    onChange={(date) => setCurrentBday(date ? date : '')}
                  ></StyledDatePicker>
                </ListItem>
                <ListItem>
                  <Label>Phone:</Label>
                  <Span
                    type="text"
                    name="phone"
                    value={currentPhone}
                    disabled={!clicked}
                    onChange={onUserPhoneChange}
                  ></Span>
                </ListItem>
                <ListItem>
                  <Label>City:</Label>
                  <Span
                    type="text"
                    name="city"
                    value={currentCity}
                    disabled={!clicked}
                    onChange={onUserCityChange}
                  ></Span>
                </ListItem>
              </StyledList>
              {clicked ? (
                <SaveButton onClick={submitForm}>Save</SaveButton>
              ) : (
                <LogoutButton
                  type="button"
                  onClick={() => setShowModal(!showModal)}
                >
                  <Logout style={{ stroke: '#54ADFF', marginRight: '12px' }} />{' '}
                  Log Out
                </LogoutButton>
              )}
              {clicked ? (
                <EditProfileButton onClick={toggleForm}>
                  <CrossSmall style={{ stroke: '#54ADFF' }} />
                </EditProfileButton>
              ) : (
                <EditProfileButton onClick={toggleForm}>
                  <Edit style={{ stroke: '#54ADFF' }} />
                </EditProfileButton>
              )}
            </UserCardWrapper>
          </Section>
          {showModal && (
            <Backdrop closeModal={() => setShowModal(!showModal)}>
              <ModalApproveAction closeModal={() => setShowModal(!showModal)} />
            </Backdrop>
          )}
        </Wrapper>
      </>
    );
  }
  
  export default UserPage;
  
  