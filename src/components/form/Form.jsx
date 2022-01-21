import './Form.scss';

export default function Form() {
  return (
    <div className='form'>
      <h1>Заполните форму</h1>
      <sub><sup>*</sup>поля обязательное для заполнения</sub>
      <form action="">
        <input type="text" placeholder='*Фамилия' />
        <input type="text" placeholder='*Имя' />
        <input type="text" placeholder='Отчество' />
        <input type="text" placeholder='*Дата рождения' />
        <input type="text" placeholder='*Пол' />
        <input type="text" placeholder='*Номер телефона' />
        <select name="group" id="">
          <option value="">*Группа клиентов</option>
          <option value="">VIP</option>
          <option value="">ОМС</option>
          <option value="">Проблемные</option>
        </select>
        <select name="" id="">
          <option value="">Лечащий врач</option>
          <option value="">Иванов А.А.</option>
          <option value="">Захаров С.В.</option>
          <option value="">Чернышева Ю.Н.</option>
        </select>
        <input type="checkbox" id='sms' />
        <label htmlFor="sms">Не отправлять СМС</label>
        <h2>Адрес:</h2>
        <input type="text" placeholder='Страна' />
        <input type="text" placeholder='Область' />
        <input type="text" placeholder='*Город' />
        <input type="text" placeholder='Улица' />
        <input type="text" placeholder='Дом' />
        <input type="text" placeholder='Индекс' />
        <h2>Данные:</h2>
        <select name="" id="">
          <option value="">*Тип документа</option>
          <option value="">Паспорт</option>
          <option value="">Свидетельство л рождении</option>
          <option value="">Водительское удостоверение</option>
        </select>
        <input type="text" placeholder='Серия' />
       <input type="text" placeholder='Номер' />
       <input type="text" placeholder='Кем выдан' />
       <input type="text" placeholder='*Дата выдачи' />
       <input type="submit" value="Создать клиента" />
      </form>
    </div>
  )
}