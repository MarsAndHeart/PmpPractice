/**
 * Created by jianghai on 2018/10/20.
 */

const questions = [
  {
    id: '1',
    title: '采用大规模信息收集技术来识别相关方，应该采用',
    options: {
      A: '问卷/调查',
      B: '头脑风暴',
      C: '相关方立方体',
      D: '凸显模型',
    },
  },
  {
    id: '2',
    title: '下述都是相关方分类的方法，除了',
    options: {
      A: '权力/利益',
      B: '权力/影响',
      C: '权力/作用',
      D: '凸显模型',
    },
  },
  {
    id: '3',
    title: '为了有效的识别相关方，需要进行以下活动:(1)对相关方进行分类;(2)识别相关方及其信息;(3)规划相关方参与(4)评估关键相关方期望。正确的步骤是',
    options: {
      A: '(1)--(2)--(3)--(4)',
      B: '(1)--(2)--(4)--(3)',
      C: '(4)--(3)--(2)--(1)',
      D: '(2)--(1)--(4)--(3)',
    },
  },
  {
    id: '4',
    title: '以下哪一个文件，可以查看到相关方的基本信息',
    options: {
      A: '相关方管理计划',
      B: '相关方登记册',
      C: '相关方分析',
      D: '相关方参与度评估矩阵',
    },
  },
  {
    id: '5',
    title: '可以基于相关方的哪些利害关系来分析相关方',
    options: {
      A: '兴趣、权利、所有权、知识、贡献',
      B: '兴趣、追求、梦想、知识、所有权',
      C: '兴趣、权力、利益、期望、贡献',
      D: '兴趣、权力、权利、所有权、能力',
    },
  },
  {
    id: '6',
    title: '项目经理正在从多个维度(大于等于三个)对某相关方进行分析，她可以采用以下哪个工具与技术',
    options: {
      A: '权力/利益方格',
      B: '相关方立方体',
      C: '凸显模型',
      D: '影响方向',
    },
  },
  {
    id: '7',
    title: '你是一位正准备开发某信息交互平台产品的项目经理，为了了解更多的需求，你加入了一个在线的相关方社区交流空间，你发现这里的人员众多且复杂，如果要在复杂的人际网络环境中识别和分析相关方相对重要性，你应该采用',
    options: {
      A: '权力/利益方格',
      B: '相关方立方体',
      C: '凸显模型',
      D: '影响方向',
    },
  },
  {
    id: '8',
    title: '在对相关方分类过程中，供应商、政府部门、最终用户等，其影响方向是',
    options: {
      A: '向上',
      B: '向下',
      C: '向外',
      D: '横向',
    },
  },
  {
    id: '9',
    title: '以下都是识别相关方的输入，除了',
    options: {
      A: '项目章程',
      B: '商业文件',
      C: '协议',
      D: '批准的变更请求',
    },
  },
  {
    id: '10',
    title: '适用于规划相关方参与的工具与技术包括',
    options: {
      A: '标杆对照',
      B: '假设条件和制约因素',
      C: '相关方参与度评估矩阵',
      D: '以上都是',
    },
  },
  {
    id: '11',
    title: '在相关方参与度评估矩阵中，相关方参与水平的说法，错误的是',
    options: {
      A: '不了解型，是不知道项目及其潜在影响',
      B: '中立型，了解项目，但是既不支持也不反对',
      C: '支持性，了解项目及其潜在影响，并且会支持项目工作及其成果',
      D: '相关方参与水平在整个生命周期中都不会发生变化',
    },
  },
  {
    id: '12',
    title: '规划相关方参与的输出是',
    options: {
      A: '相关方登记册',
      B: '相关方管理计划',
      C: '相关方参与计划',
      D: '相关方管理策略',
    },
  },
  {
    id: '13',
    title: '管理相关方参与属于',
    options: {
      A: '启动过程组',
      B: '规划过程组',
      C: '执行过程组',
      D: '监控过程组',
    },
  },
  {
    id: '14',
    title: '应该在项目的哪个阶段识别相关方',
    options: {
      A: '启动阶段',
      B: '规划阶段',
      C: '执行阶段',
      D: '收尾阶段',
    },
  },
  {
    id: '15',
    title: '关于识别相关方，以下哪个说法是错误的',
    options: {
      A: '识别相关方越早越好',
      B: '识别相关方是项目经理的事',
      C: '识别相关方要全面',
      D: '识别相关方在整个生命周期都要持续进行',
    },
  },
  {
    id: '16',
    title: '管理相关方参与的输出是',
    options: {
      A: '变更请求',
      B: '批准的变更请求',
      C: '可交付成果',
      D: '工作绩效信息',
    },
  },
  {
    id: '17',
    title: '在管理相关方参与时经常使用人际关系与团队技能，以下哪一个不是人际关系与团队技能的表现方式',
    options: {
      A: '冲突管理',
      B: '文化意识',
      C: '政治意识',
      D: '沟通技能',
    },
  },
  {
    id: '18',
    title: '对相关方影响项目的合法资格、主管愿望、促使项目改变的能力的最好描述是',
    options: {
      A: '利益、权力、影响',
      B: '权力、影响、作用',
      C: '影响、权力、作用',
      D: '作用、权力、影响',
    },
  },
  {
    id: '19',
    title: '在项目所有的相关方中间，发起人的主要作用是',
    options: {
      A: '为项目提供资金支持',
      B: '签署项目章程',
      C: '参与阶段末评审',
      D: '游说更高层管理人员',
    },
  },
  {
    id: '20',
    title: '管理相关方参与过程旨在与相关方进行沟通和协作，引导相关方合理参与项目，该过程应该在项目的哪个阶段进行',
    options: {
      A: '在项目启动阶段',
      B: '在组织与准备阶段',
      C: '在执行项目阶段',
      D: '在整个项目生命周期中',
    },
  },
  {
    id: '21',
    title: '项目管理团队已经识别出了项目的相关方信息，下一步应该',
    options: {
      A: '分析每个相关方的影响，并分类',
      B: '评估关键相关方对不同情况可能做出的反应或应对',
      C: '制定合理的管理策略',
      D: '与相关方一起解决问题',
    },
  },
  {
    id: '22',
    title: '以下哪项是相关方参与度评估矩阵中的内容',
    options: {
      A: '相关方联系方式',
      B: '相关方的当前参与度与所需参与度程度',
      C: '相关方的需求和期望',
      D: '相关方管理计划',
    },
  },
  {
    id: '23',
    title: '项目章程刚刚发布，接下来你应该',
    options: {
      A: '制定项目管理计划',
      B: '项目开工会',
      C: '识别相关方',
      D: '邀请客户参与开工会',
    },
  },
  {
    id: '24',
    title: '项目经理接手一个项目。此时项目章程已经审批，有项目团队成员16人，进度限制已经明确。项目经理在制定沟通管理计划之前，应该首先做什么',
    options: {
      A: '识别相关方',
      B: '风险规划',
      C: '进度计划',
      D: '费用预算',
    },
  },
  {
    id: '25',
    title: '项目经理向PMO经理提交项目状态报告。PMO经理认为没有把当地政府机构加入到项目中，因此，公司可能必须支付罚款。项目经理没有做好下面哪项工作',
    options: {
      A: '识别相关方',
      B: '规划沟通',
      C: '相关方管理策略',
      D: '需求计划',
    },
  },
  {
    id: '26',
    title: '在实施一个新的软件功能后，客户抱怨说功能的实现与预期不符。质量控制团队回复说该功能已经通过所有测试，且项目团队已经理解了功能描述。出现这种情况的原因是什么',
    options: {
      A: '未向客户分发功能描述',
      B: '验收标准未充分制订，且未得到项目相关方的同意',
      C: '未考虑到客户可能不接受该功能的风险',
      D: '范围定义时产品功能描述不够详细',
    },
  },
  {
    id: '27',
    title: '项目经理已完成了相关方登记册的相关工作。项目经理接下来应该制订什么',
    options: {
      A: '相关方管理计划',
      B: '范围说明书',
      C: '工作分解结构',
      D: '项目管理计划',
    },
  },
  {
    id: '28',
    title: '项目章程已经完成并发布，项目经理在组织相关方讨论项目计划的时候，没有想到一位关键相关方提出项目的预算成本大大超过了之前的总体估算，要求立即停止项目，请问项目经理可能忘记做了什么',
    options: {
      A: '识别出该相关方',
      B: '分析相关方的影响',
      C: '制作相关方登记册',
      D: '制定相关方管理计划',
    },
  },
  {
    id: '29',
    title: '项目经理觉得某位相关方有风险，但是该相关方信息敏感，应该怎么做',
    options: {
      A: '把相关方信息列在风险登记册上',
      B: '和这个相关方谈谈',
      C: '和项目团队成员开会探讨',
      D: '不理睬这位相关方',
    },
  },
  {
    id: '30',
    title: '明确项目团队成员和其他相关方应该采取什么行为去引导相关方参与，依靠',
    options: {
      A: '相关方管理计划',
      B: '资源管理计划',
      C: '基本规则',
      D: '决策',
    },
  },
];

const answers = [
  {
    id: '1',
    correct: 'A',
    explanation: '参考PMBOK511。',
  },
  {
    id: '2',
    correct: 'C',
    explanation: '参考PMBOK512，数据表现中，没有权力/作用表现方式。',
  },
  {
    id: '3',
    correct: 'D',
    explanation: '参考PMBOK504，识别相关方(识别相关方及其信息—对相关方进行分类)---规划相关方参与(评估关键相关方期望—规划相关方参与)。',
  },
  {
    id: '4',
    correct: 'B',
    explanation: '参考PMBOK514，相关方登记册中记载了已经识别的相关方的基本信息。',
  },
  {
    id: '5',
    correct: 'A',
    explanation: '参考PMBOK512，相关方分析是数据分析的一种情况，包括了相关方有关兴趣、权利、所有权、知识和贡献方面的单个或综合考虑，来分析每个相关方在项目中的参与度。',
  },
  {
    id: '6',
    correct: 'B',
    explanation: '参考PMBOK513，相关方立方体从三个及以上的维度，综合分析项目相关方的影响。',
  },
  {
    id: '7',
    correct: 'C',
    explanation: '参考PMBOK513，凸显模型适用于复杂的相关方大型社区，或在相关方社区内部存在复杂的关系网络。用于确定已识别相关方的相对重要性。',
  },
  {
    id: '8',
    correct: 'C',
    explanation: '参考PMBOK513，考生需要了解影响方向的四个不同维度，以及事例。',
  },
  {
    id: '9',
    correct: 'D',
    explanation: '参考PMBOK503.输入、工具与技术、输出是重点内容。',
  },
  {
    id: '10',
    correct: 'D',
    explanation: '参考PMBOK520，规划相关方参与过程包括很多工具与技术。',
  },
  {
    id: '11',
    correct: 'D',
    explanation: '参考PMBOK521，参与水平会随着项目的推进发生变化，一个相关方在开始时很支持，在后面也可能会反对。',
  },
  {
    id: '12',
    correct: 'C',
    explanation: '参考PMBOK522，规划相关方参与的输出只有相关方参与计划。',
  },
  {
    id: '13',
    correct: 'C',
    explanation: '参考PMBOK523或49个过程矩阵表。',
  },
  {
    id: '14',
    correct: 'A',
    explanation: '参考PMBOK504，启动过程组制定完项目章程后，进入识别相关方过程。',
  },
  {
    id: '15',
    correct: 'B',
    explanation: '参考PMBOK504，识别相关方是所有项目团队的事情，而不是项目经理个人的事情。',
  },
  {
    id: '16',
    correct: 'A',
    explanation: '参考PMBOK504，管理相关方在执行过程中进行，变更请求在大多数执行过程和监控过程都可能作为输出。',
  },
  {
    id: '17',
    correct: 'D',
    explanation: '参考PMBOK527，沟通技能是独立的工具与技术，不属于人际关系与团队技能。',
  },
  {
    id: '18',
    correct: 'B',
    explanation: '参考PMBOK512,。',
  },
  {
    id: '19',
    correct: 'A',
    explanation: '参考PMBOK75，发起人首先是一个提供资金支持者，其次是签署项目章程。如果没有资金启动项目，就不会有项目章程的签署。',
  },
  {
    id: '20',
    correct: 'D',
    explanation: '参考PMBOK505，应该在整个项目生命周期过程持续进行相关方参与引导工作，让他们始终按照项目预期的方向努力。',
  },
  {
    id: '21',
    correct: 'A',
    explanation: '参考PMBOK512，在识别的过程中，然后紧接着进行分类。',
  },
  {
    id: '22',
    correct: 'B',
    explanation: '参考PMBOK521，相关方参与度评估矩阵描述了当前和所需参与的程度对比分析。',
  },
  {
    id: '23',
    correct: 'C',
    explanation: '参考PMBOK25，在启动过程组中，项目章程发布后进入识别相关方过程。',
  },
  {
    id: '24',
    correct: 'A',
    explanation: '参考PMBOK507，先识别相关方，再制定沟通管理计划。',
  },
  {
    id: '25',
    correct: 'A',
    explanation: '参考PMBOK507。相关方识别出了问题，没有在刚开始识别完整。',
  },
  {
    id: '26',
    correct: 'B',
    explanation: '参考PMBOK523，应该尽可能管理相关方参与验收标准的制定，且得到他们的同意。',
  },
  {
    id: '27',
    correct: 'A',
    explanation: '参考PMBOK516，按照相关方管理的四个过程分别是:识别相关方、规划相关方参与、管理相关方参与、监督相关方参与。',
  },
  {
    id: '28',
    correct: 'B',
    explanation: '参考PMBOK512，一位相关方觉得成本大大超出，说明已经识别了该相关方，但是对她的影响没有评估出来。应该分析相关方的影响。',
  },
  {
    id: '29',
    correct: 'B',
    explanation: '参考PMBOK523，人际关系与团队技能中，处理相关方的信息时需要灵活应对，应该和信息敏感的相关方单独交流。',
  },
  {
    id: '30',
    correct: 'C',
    explanation: '参考PMBOK528.基本规则是对项目团队做出的行为规范的约定，以便可以引导他们采取什么行为去引导相关方参与。',
  },
];

const chapter13 = {
  id: 'chapter13',
  title: '第十三章:项目相关方管理',
  questions,
  answers,
};

export default chapter13;