// 플러그인 UI 표시 (너비 320, 높이 600)
figma.showUI(__html__, { width: 320, height: 600 });

// 내장 CSV 데이터 (실제 CSV 내용을 여기에 붙여넣으세요)
// CSV 헤더: id,TargetMuscle  
// TargetMuscle 컬럼에는 JSON 배열 형식 또는 쉼표 구분 형식 둘 다 허용합니다.
const csvData = `id,TargetMuscle
1	["대흉근"]
2	["대흉근","상완 삼두근","전방 삼각근"]
3	["복직근","외복사근"]
4	["전방 삼각근","대흉근","상완 삼두근"]
5	["대흉근","상완 삼두근","전방 삼각근"]
6	["상완 삼두근","대흉근","전방 삼각근"]
7	["대흉근","상완 삼두근","복직근","척추기립근"]
8	["대흉근","상완 삼두근"]
9	["대흉근","삼두근","전방 삼각근"]
11	["대흉근","삼두근","전방 삼각근"]
12	["삼두근","대흉근","전거근"]
13	["삼두근","대흉근","전거근"]
14	["전방 삼각근","내측 삼각근","후방 삼각근"]
15	["상완 삼두근","대흉근","전방 삼각근"]
16	["대흉근","상완 삼두근","전방 삼각근"] 
17	["대흉근","광배근","복직근","상완삼두근"]
18	["대흉근","삼각근","복직근"]
20	["대퇴사두근","대둔근"]
21	["대퇴사두근","대퇴이두근"]
23	["대퇴사두근","비복근","대둔근"]
24	["중둔근","대퇴사두근","대퇴이두근"]
25	["대퇴사두근","대퇴이두근"]
26	["대둔근","내전근"]
27	["대퇴사두근","대둔근","대퇴이두근","비복근"]
28	["대퇴사두근"]
29	["대퇴사두근","대흉근","삼두근"]
30	["대둔근","대퇴사두근"]
31	["대둔근","내전근","대퇴사두근"]
32	["대퇴사두근","비복근","대퇴이두근"]
33	["대퇴사두근","외복사근","복직근"]
34	["대퇴사두근","외복사근","복직근"]
35	["대퇴사두근","외복사근","복직근"]
36	["대퇴사두근","대퇴이두근","대둔근"]
37	["대퇴사두근","대퇴이두근","전경골근"]
38	["대퇴사두근","둔근","비복근"]
39	["대둔근","대퇴사두근","대퇴이두근"]
40	["대퇴사두근","대둔근","대퇴이두근","비복근"]
41	["대퇴사두근","대둔근","복직근"]
42	["복직근","전방 삼각근","대퇴사두근"]
43	["전방 삼각근","대퇴사두근"]
44	["복직근","복사근","고관절"]
45	["대흉근","상완 삼두근","전방 삼각근"]
46	["복직근","대둔근","외복사근"]
47	["복직근","대둔근"]
48	["대흉근","상완 삼두근","전방 삼각근"]
49	["복직근"]
50	["대퇴사두근","대퇴이두근","대둔근"]
52	["광배근","승모근","후방 삼각근"]
53	["광배근","삼각근","승모근","복직근","복사근"]
54	["대흉근","삼두근","복직근","전거근","광배근"]
56	["복직근","외복사근","상완 삼두근"]
57	["복직근","외복사근","삼각근"]
58	["광배근","승모근","이두근","후방 삼각근"]
59	["광배근","승모근","이두근","후방 삼각근"]
60	["복직근","대퇴사두근","대둔근","전방 삼각근"]
61	["삼두근","전방 삼각근","대흉근"]
62	["복직근","대둔근"]
63	["삼각근"]
64	["복직근","대퇴사두근","비복근"]
65	["복직근","대퇴사두근","비복근"]
66	["대퇴사두근","대흉근","삼두근"]
67	["광배근","승모근","후방 삼각근"]
68	["복직근","외복사근","삼각근","상완삼두근","완요골근"]
69	["삼두근"]
70	["이두근","대퇴사두근","비복근"]
71	["고관절굴근","삼각근"]
72	["복직근","외복사근","대퇴사두근"]
73	["복직근","대퇴사두근"]
74	["외복사근","복직근","대퇴사두근"]
75	["대둔근","대퇴이두근","대퇴사두근"]
76	["대퇴사두근","이두박근"]
77	["복직근","대퇴이두근","대퇴사두근"]
78	["상완 삼두근","대퇴이두근","내전근"]
79	["복직근","외복사근","내복사근"]
80	["대퇴이두근","삼각근","상완 삼두근"]
81	["대흉근","전방 삼각근","대퇴이두근"]
82	["대둔근","대퇴이두근"]
83	["대퇴이두근","대둔근","전방 삼각근"]
84	["복직근","내복사근","외복사근"]
85	["소둔근","대둔근","대퇴사두근","외측광근"]
86	["대퇴사두근","대둔근"]
87	["대퇴사두근","대퇴이두근","대둔근"]
88	["광배근","척추기립근"]
89	["복직근","외복사근","내복사근"]
90	["복직근","복횡근"]
91	["복직근","복횡근"]
92	["복직근","내복사근","외복사근"]
93	["복직근","내복사근","외복사근"]
94	["복직근","외복사근"]
95	["복직근","외복사근"]
96	["대퇴사두근","대퇴이두근"]
97	["대퇴사두근","대퇴이두근"]
98	["대퇴사두근","비복근","대퇴이두근"]
99	["대퇴사두근","비복근","대퇴이두근"]
100	["대퇴사두근","대퇴이두근","대둔근"]
101	["대퇴사두근","대퇴이두근","대둔근"]
102	["대퇴사두근","대둔근"]
103	["대퇴사두근","대둔근"]
302	["복직근","복횡근","척추기립근"]
303	["대퇴사두근","대둔근","대퇴이두근"]
304	["복사근","복직근"]
305	["복사근","복직근"]
306	["복직근","외복사근","내복사근","대퇴근","대흉근","삼각근"]
307	["복직근","외복사근","내복사근","대퇴근","대흉근","삼각근"]
501	["승모근","후방 삼각근"]
502	["대퇴 사두근","중둔근"]
503	["대퇴이두근","대둔근","척추기립근","광배근"]
504	["복직근","외복사근"]
505	["대둔근","고관절굴근","비복근"]
506	["복직근","외복사근","내복사근"]
507	["고관절굴근","삼각근"]
508	["고관절굴근","삼각근"]
509	["비복근"]
510	["고관절굴근","삼각근","복직근"]
511	["복직근","복사근"]
512	["복직근","외복사근"]
513	["대퇴사두근","상부승모근","삼각근"]
514	["극하근","대둔근","대퇴이두근"]
515	["광배근","승모근","후방 삼각근"]
516	["척추기립근","대둔근","대퇴이두근"]
517	["승모근","견갑하근"]
518	["승모근","후방삼각근"]
519	["전방 삼각근"]
520	["측면 삼각근"]
521	["대흉근","상완삼두근","광배근"]
522	["복직근","복횡근"]
523	["복직근","복횡근"]
524	["복직근","복횡근"]
525	["복직근","대퇴사두근","삼각근","전완근","대흉근"]
526	["대둔근","대퇴사두근"]
527	["복직근","고관절굴근","대둔근","삼각근","상완삼두근"]
528	["광배근'","이두근","후방 삼각근"]
529	["삼두박근","복직근"]
530	["복직근","대퇴사두근","비복근"]
531	["복직근","복횡근"]
532	["대퇴사두근","대둔근"]
533	["대퇴사두근","대둔근"]
534	["대퇴사두근","대퇴이두근","비복근"]
535	["대퇴사두근","대퇴이두근","비복근"]
536	["대둔근","척추기립근"]
537	["대둔근","척추기립근"]
538	["중둔근","대퇴근막장근","대둔근","내전근"]
539	["중둔근","대퇴근막장근","대둔근","내전근"]
540	["척추 기립근"]
542	["복직근","외복사근","내복사근"]
543	["복직근","외복사근","내복사근"]
544	["고관절굴근","중둔근","소둔근"]
545	["고관절굴근","중둔근","소둔근"]
546	["복직근","대퇴사두근","대퇴이두근","비복근"]
547	["복직근","대퇴사두근","대퇴이두근","비복근"]
548	["대퇴이두근","대둔근"]
549	["대퇴이두근","대둔근"]
550	["복직근","외복사근"]
551	["복직근","외복사근"]]
`; 

// 색상 매핑 (우선순위별)
// 첫 번째 근육 → 매핑 "1", 두 번째 → "2", 세 번째 → "3"
const colorMapping: { [key: string]: string } = {
  "1": "#0D2468",
  "2": "#2C40AC",
  "3": "#3267A7"
};

/**
 * 내장 CSV 데이터를 파싱하여 객체 배열로 반환하는 함수  
 * - 첫 번째 열은 id, 두 번째 열부터 모두 TargetMuscle으로 결합
 */
function parseLocalCsvData(): { [key: string]: string }[] {
  const lines = csvData.split("\n").filter(line => line.trim() !== "");
  const headers = lines[0].split(",").map(h => h.trim());
  const rows = lines.slice(1);
  const data = rows.map(line => {
    const cols = line.split(",").map(c => c.trim());
    let item: { [key: string]: string } = {};
    item[headers[0]] = cols[0] || "";
    if (cols.length > 1) {
      item[headers[1]] = cols.slice(1).join(",");
    } else {
      item[headers[1]] = "";
    }
    return item;
  });
  return data;
}

/**
 * Hex 색상 문자열을 Figma의 RGB 객체({r, g, b})로 변환 (0~1 범위)
 */
function hexToRgb(hex: string) {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  return {
    r: ((bigint >> 16) & 255) / 255,
    g: ((bigint >> 8) & 255) / 255,
    b: (bigint & 255) / 255
  };
}

/**
 * 지정한 근육명(레이어 이름)에 해당하는 모든 노드에,
 * 주어진 매핑 번호의 색상을 적용하는 함수.
 */
function applyColorToVector(muscleName: string, mappingNumber: string) {
  const colorHex = colorMapping[mappingNumber];
  if (!colorHex) {
    figma.notify(`색상 매핑 번호 "${mappingNumber}"가 올바르지 않습니다.`);
    return;
  }
  const rgb = hexToRgb(colorHex);
  const newPaint: SolidPaint = { type: 'SOLID', color: rgb };

  const matchingNodes = figma.currentPage.findAll(node => node.name === muscleName);
  if (matchingNodes.length === 0) {
    figma.notify(`레이어 이름이 "${muscleName}"인 노드가 없습니다.`);
    return;
  }
  matchingNodes.forEach(node => {
    if ("fills" in node) {
      node.fills = [newPaint];
    }
  });
  figma.notify(`근육 "${muscleName}"에 색상 ${colorHex} 적용 완료!`);
}

/**
 * 상위 레이어 "사람"을 찾아 PNG (2배 스케일)로 추출하는 함수.
 */
async function exportTopLayerAsPNG(): Promise<string> {
  const topLayer = figma.currentPage.findOne(node => node.name === "사람");
  if (!topLayer) {
    figma.notify(`상위 레이어 "사람"이 없습니다.`);
    return "";
  }
  try {
    const bytes = await topLayer.exportAsync({
      format: "PNG",
      constraint: { type: "SCALE", value: 2 }
    });
    return figma.base64Encode(bytes);
  } catch (error) {
    figma.notify(`상위 레이어 "사람" 내보내기 실패`);
    return "";
  }
}

/**
 * 재귀적으로 노드의 fills를 초기화하는 함수
 */
function resetFillsRecursive(node: SceneNode) {
  if ("fills" in node) {
    node.fills = [];
  }
  if ("children" in node) {
    for (const child of node.children) {
      resetFillsRecursive(child);
    }
  }
}

/**
 * 상위 레이어 "사람" 내부의 모든 노드 색상 초기화 (재귀적)
 */
function resetTopLayerColors() {
  const topLayer = figma.currentPage.findOne(node => node.name === "사람");
  if (!topLayer) {
    figma.notify(`상위 레이어 "사람"이 없습니다.`);
    return;
  }
  resetFillsRecursive(topLayer);
  figma.notify("상위 레이어 '사람' 내부 색상 초기화 완료!");
}

/**
 * 한 운동 ID에 대해 처리하는 함수:
 * 1. CSV에서 해당 운동 ID 행을 찾아 TargetMuscle 컬럼을 얻음
 * 2. TargetMuscle 데이터를 JSON 파싱 시도 (리스트 형식이면 바로 배열 반환), 실패 시 쉼표 분리
 * 3. 최대 3개 근육에 대해 순서대로 색칠 (첫 번째 → 매핑 "1", 두 번째 → "2", 세 번째 → "3")
 * 4. 상위 레이어 "사람"을 내보내어 PNG를 추출
 * 5. 추출 후 즉시 상위 레이어 "사람" 내부 색상 재귀 초기화 (resetTopLayerColors)
 * 반환: PNG의 base64 문자열 (없으면 null)
 */
async function processOneExercise(exerciseID: number, data: { [key: string]: string }[]) {
  const row = data.find(item => Number(item["id"]) === exerciseID);
  if (!row) {
    figma.notify(`운동 ID "${exerciseID}" 데이터가 없습니다.`);
    return null;
  }
  let muscleList: string[];
  try {
    muscleList = JSON.parse(row["TargetMuscle"]);
  } catch (e) {
    muscleList = row["TargetMuscle"].split(",").map(m => m.trim());
  }
  muscleList.slice(0, 3).forEach((muscle, idx) => {
    const mappingNum = String(idx + 1);
    applyColorToVector(muscle, mappingNum);
  });
  const base64 = await exportTopLayerAsPNG();
  resetTopLayerColors();
  return base64;
}

/**
 * 시작 운동 ID부터 종료 운동 ID까지 순차 처리하는 함수:
 * 각 운동 ID마다 processOneExercise를 호출하고, 결과를 배열로 수집하여 UI에 전송
 */
async function createMultipleExerciseImages(startID: number, endID: number) {
  const data = parseLocalCsvData();
  const results: { id: number, base64: string }[] = [];
  for (let id = startID; id <= endID; id++) {
    const base64 = await processOneExercise(id, data);
    if (base64) {
      results.push({ id, base64 });
    }
  }
  figma.ui.postMessage({ type: 'exportMultipleComplete', results });
  figma.notify(`운동 ID ${startID} ~ ${endID} 처리 완료!`);
}

// UI 메시지 수신 처리
figma.ui.onmessage = async msg => {
  if (msg.type === 'createRange') {
    const startID = Number(msg.startID);
    const endID = Number(msg.endID);
    await createMultipleExerciseImages(startID, endID);
  }
};