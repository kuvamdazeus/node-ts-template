#!/usr/bin/env python3
from sys import argv, exit
from os import system, chdir

middleware_or_controller = """import { NextFunction, Request, Response } from 'express';

export default function handler(req: Request, res: Response, next: NextFunction) {
  // do something here
  next();
}"""

try:
  [type, name] = ",".join(argv[1:]).lower().split(',')
except Exception as e:
  print('Invalid input!', "ERROR: " + str(e), sep='\n')
  exit(1)

if type == 'middleware' or type == 'controller':
  chdir(f'./src/{type}s')
  system(f'echo "{middleware_or_controller}" > {name}')
