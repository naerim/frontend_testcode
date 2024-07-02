export const DeliveryAddress = ({ title = "배송지" }: { title?: string }) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      <div>
        <label>
          우편번호
          <input type="text" name="postalCode" placeholder="167-0051" />
        </label>
      </div>
      <div>
        <label>
          시/도
          <input type="text" name="prefectures" placeholder="東京都" />
        </label>
      </div>
      <div>
        <label>
          시/군/구
          <input type="text" name="municipalities" placeholder="杉並区荻窪1" />
        </label>
      </div>
      <div>
        <label>
          도로명
          <input type="text" name="streetNumber" placeholder="00-00" />
        </label>
      </div>
    </fieldset>
  );
};
