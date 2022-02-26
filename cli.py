#!/usr/bin/env python3
from sys import argv, exit
from os import listdir, system, chdir

middleware_flag = "// MIDDLEWARES"
endpoints_flag = "// ENDPOINTS"
middleware_or_controller = """import { NextFunction, Request, Response } from 'express';

export default function handler(req: Request, res: Response, next: NextFunction) {
  // do something here
  next();
}"""

def add_statement(statement, flag, contents):
  contents.insert(contents.index(flag)+1, statement)

try:
  [type, name, path] = argv[1:]
except Exception as e:
  print('Invalid input!', "ERROR: " + str(e), sep='\n')
  exit(1)

if type == 'middleware' or type == 'controller':
  chdir(f'src/{type}s')
  system(f'echo "{middleware_or_controller}" > {name}')
  chdir('..')

  contents = None # '\n' separated strings (lines)
  
  try:
    with open('server.ts') as f:
      contents = f.read().split('\n')
      f.close()

      add_statement(f'import {name[:name.index(".")]} from "./{type}s/{name[:name.index(".")]}"', 'import express from "express";', contents)

      if type == 'middleware': add_statement(f'app.use("{path}", {name[:name.index(".")]});', middleware_flag, contents)
      else: add_statement(f'app.get("{path}", {name[:name.index(".")]});', endpoints_flag, contents)

    with open('server.ts', 'w') as f:
      f.write("\n".join(contents))
      f.close()
  
  except Exception as e:
    print('Error connecting middleware/controller in server.ts file,\nmanually connect the endpoint/middleware or edit cli.py for customizations', '\n', 'ERROR: ' + str(e), sep='')