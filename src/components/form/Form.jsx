import Select from '../select/Select';
import './Form.scss';

export default function Form() {
  return (
    <div className='form'>
      <h1 className='form__title'>Заполните форму</h1>
      <sub className='form__desc'>*поля обязательное для заполнения</sub>
      <form action="" className='form__form'>
        <input type="text" placeholder='*Фамилия' />
        <input type="text" placeholder='*Имя' />
        <input type="text" placeholder='Отчество' />
        <div className='form__group'>
          <input type="text" placeholder='*Дата рождения' className='form__left' />
          <input type="text" placeholder='*Пол' className='form__right' />
        </div>
        <input type="text" placeholder='*Номер телефона' />
        <Select
          displayActiveText={'*Группа клиентов'}
          optionList={['VIP', 'ОМС', 'Проблемные']}
        />
        <Select
          displayActiveText={'Лечащий врач'}
          optionList={['Иванов А.А.', 'Захаров С.В.', 'Чернышева Ю.Н.']}
        />
        <div>
          <input type="checkbox" id='sms' className='form__sms-checkbox' />
          <label htmlFor="sms" className='form__sms-label'>Не отправлять СМС</label>
        </div>
        <h2>Адрес:</h2>
        <input type="text" placeholder='Страна' />
        <input type="text" placeholder='Область' />
        <input type="text" placeholder='*Город' />
        <div className='form__group'>
          <input type="text" placeholder='Улица' className='form__left' />
          <input type="text" placeholder='Дом' className='form__right' />
        </div>
        <input type="text" placeholder='Индекс' />
        <h2>Данные:</h2>
        <Select
          displayActiveText={'*Тип документа'}
          optionList={['Паспорт', 'Свидетельство л рождении', 'Водительское удостоверение']}
        />
        <div className='form__group'>
          <input type="text" placeholder='Серия' className='form__left form__left_one' />
          <input type="text" placeholder='Номер' className='form__right form__right_one' />
        </div>
        <input type="text" placeholder='Кем выдан' />
        <input type="text" placeholder='*Дата выдачи' />
        <input type="submit" value="Создать клиента" />
      </form>
    </div>
  )
}