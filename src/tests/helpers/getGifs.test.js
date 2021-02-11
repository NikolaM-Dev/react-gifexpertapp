import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
  test('Debe de traer 10 elementos', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).tobe(10);
  });
});
