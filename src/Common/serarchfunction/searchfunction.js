export const searchFun = (e, orginal, setDuplicate) => {
  let values = orginal.filter((val) =>
    Object.values(val).some((valu) =>
      valu.toLowerCase().includes(e.target.value.toLowerCase().trim())
    )
  );
  setDuplicate(values);
};