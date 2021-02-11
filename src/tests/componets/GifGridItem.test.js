import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../componets/GifGridItem';

describe('Pruebas en GifGridItem', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Debe de mostrar correctamente <GifGridItem />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de tener un parrafo con el ttitle', () => {
    const p = wrapper.find('p').text().trim();

    expect(p).toBe(title);
  });

  test('Debe de tener la imagen al url y alt de los props', () => {
    const img = wrapper.find('img');

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener la class animate__fadeIn', () => {
    const div = wrapper.find('div');
    const include = div.prop('className').includes('animate__fadeIn');

    expect(include).toBe(true);
  });
});
