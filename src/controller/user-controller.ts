import {
  Body,
  Controller, Get, OnUndefined, Param, Post
} from 'routing-controllers';
import 'reflect-metadata';
import { Info } from '../model/info';

@Controller()
// @UseBefore(loggingBefore)
// @UseAfter(loggingAfter)
// @UseInterceptor((action: Action, content: any) => {
//   console.log('change response...');
//   content = 'in';
//   return content;
// })
export class UserController {
  @Get('/users/:id')
  getOne (@Param('id') id: number) {
    console.log('!!');
    return 'This action returns user #' + id;
  }

  @Post('/users/:id')
  @OnUndefined(204)
  postOne (@Param('id') id: number, @Body() info: Info) {
    console.log(JSON.stringify(info));
  }
}
