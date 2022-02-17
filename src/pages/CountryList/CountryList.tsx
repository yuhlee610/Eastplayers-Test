import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import InputContainer from "../../components/InputContainer/InputContainer";
import "./CountryList.css";
import { IoIosArrowForward } from "react-icons/io";
import Spinner from "../../components/Spinner/Spinner";

const CountryList = () => {
  const [inputCountry, setInputCountry] = useState<string>("");
  const [countries, setCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const changeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCountry(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputCountry.trim() !== "") {
        setLoading(true);
        fetch(`https://restcountries.com/v3.1/name/${inputCountry}`)
          .then((data) => data.json())
          .then((result) => {
            const newData: string[] = [];
            if (Array.isArray(result)) {
              result.forEach((element) => {
                newData.push(element.name.common);
              });
              setCountries(newData);
            }
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputCountry]);

  return (
    <div className="country-list">
      <Header title="Country list" backButton />
      <InputContainer>
        <input type="text" onChange={changeTextHandler} value={inputCountry} />
        {loading ? (
          <Spinner />
        ) : (
          <IoIosArrowForward style={{ color: "rgba(101, 97, 245, 1)" }} />
        )}
      </InputContainer>
      <ul>
        {countries.length !== 0 &&
          countries.map((country) => <li key={country}>{country}</li>)}
      </ul>
    </div>
  );
};

export default CountryList;
