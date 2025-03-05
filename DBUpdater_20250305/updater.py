import csv
import dotenv
import os
from supabase import create_client, Client


def insert_data(supabase: Client, file_path: str, column_name: str):
    # Step 1: Load CSV file
    with open(file_path, 'r', encoding='utf-8-sig') as file:
        csv_reader = csv.DictReader(file)
        data = list(csv_reader)

    # Step 3: Insert data into the 'exercise' table
    for row in data:
        print(row)


        data, error = supabase.table('Exercise_test').update({
            'Name': row['Name'],
            column_name: row[column_name]
        }).eq('id', row['id']).execute()

        #data, error = supabase.table('Exercise').insert([
        #    {'id': row['id'], column_name: row[column_name]}
        #]).execute()

        # Error handling for the insert operation
        if error:
            print(f"Unable to insert data: {error}")
        else:
            print(f"Data inserted for id {row['id']}")

def connect_to_supabase(supabase_url: str, supabase_anon_key: str) -> Client:
    supabase = create_client(supabase_url, supabase_anon_key)
    return supabase

if __name__=="__main__":
    # env 파일 찾기
    #dotenv_file = dotenv.find_dotenv()
    #dotenv.load_dotenv(dotenv_file)
    # 계정 셋업 및 클라이언트 생성

    #url: str = os.environ["SUPABASE_URL"]
    #key: str = os.environ["SUPABASE_KEY"]
    url: str = "https://nherivcnanphkalgybji.supabase.co"
    key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZXJpdmNuYW5waGthbGd5YmppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NDEwMTYsImV4cCI6MTk5NTExNzAxNn0.Rwe9gNIgNXKRqq3PCg_8vfd06QzxDDR0Bh9ec82a_sk"
    supabase: Client = create_client(url, key)

    # get_tables 함수를 호출하여 테이블 목록 가져오기
    response = supabase.rpc('get_tables').execute()

    # 결과 출력
    if response.data:
        for table in response.data:
            print(table)
    else:
        print("테이블이 없습니다.")

    data_file = "TracMe API DB (1).csv"
    column_name = "Name"

    insert_data(supabase, data_file, column_name)