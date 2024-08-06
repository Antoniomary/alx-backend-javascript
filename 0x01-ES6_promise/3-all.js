import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([resp1, resp2]) => console.log(`${resp1.body} ${resp2.firstName} ${resp2.lastName}`))
    .catch(() => console.error('Signup system offline'));
}
