const RegisterThread = require('../RegisterThread');
 
describe('a RegisterThread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      title: 'abc',
    };
 
    // Action and Assert
    expect(() => new RegisterThread(payload)).toThrowError('REGISTER_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });
 
  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      title: 123,
      body: true,
      owner: 'abc',
    };
    // Action and Assert
    expect(() => new RegisterThread(payload)).toThrowError('REGISTER_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });
  it('should create RegisterThread object correctly', () => {
    // Arrange
    const payload = {
      title: 'dicoding',
      owner: 'Dicoding Indonesia',
      body: 'body',
    };
    // Action
    const { title, body, owner } = new RegisterThread(payload);
    // Assert
    expect(title).toEqual(payload.title);
    expect(owner).toEqual(payload.owner);
    expect(body).toEqual(payload.body);
  });
});