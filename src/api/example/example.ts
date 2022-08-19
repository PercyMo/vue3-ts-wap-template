import { Example as Request } from '@/api';

export function getExampleAuthor() {
  return Request<API.ExampleAuthorResult>({
    url: '/api/v1/example/author',
  });
}
