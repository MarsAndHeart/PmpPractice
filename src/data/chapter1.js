/**
 * Created by jianghai on 2018/10/17.
 */
const answers = [
  {
    id: '1',
    correct: 'C',
    explanation: '参考PMBOK1。项目的概念很容易理解，与运营管理进行对比。',
  },
  {
    id: '2',
    correct: 'B',
    explanation: '参考PMBOK3。PMBOK第六版提到了职业道德价值观，需要考生记住。',
  },
  {
    id: '3',
    correct: 'B',
    explanation: '参考PMBOK4，关于项目独特性的具体说明',
  },
  {
    id: '4',
    correct: 'D',
    explanation: '参考PMBOK5.项目具有临时性',
  },
  {
    id: '5',
    correct: 'B',
    explanation: '参考PMBOK7，原话。',
  },
  {
    id: '6',
    correct: 'D',
    explanation: '参考PMBOK9，类似组织实施六西格玛价值流图项目，属于业务流程改进。',
  },
  {
    id: '7',
    correct: 'C',
    explanation: '参考PMBOK10，项目成功和失败会给组织或相关方带来什么',
  },
  {
    id: '8',
    correct: 'D',
    explanation: '参考PMBOK11，并不一定减轻组织成员的劳动量',
  },
  {
    id: '9',
    correct: 'B',
    explanation: '参考PMBOK11，项目、项目集、项目组合',
  },
  {
    id: '10',
    correct: 'A',
    explanation: '参考PMBOK14',
  },
  {
    id: '11',
    correct: 'B',
    explanation: '参考PMBOK15',
  },
  {
    id: '12',
    correct: 'D',
    explanation: 'PMBOK16，运营不是临时性的',
  },
  {
    id: '13',
    correct: 'B',
    explanation: '参考PMBOK17',
  },
  {
    id: '14',
    correct: 'C',
    explanation: '参考PMBOK22',
  },
  {
    id: '15',
    correct: 'C',
    explanation: '参考PMBOK19',
  },
  {
    id: '16',
    correct: 'B',
    explanation: '参考PMBOK19',
  },
  {
    id: '17',
    correct: 'C',
    explanation: '参考PMBOK19，题中为“无帮助”，即错误答案',
  },
  {
    id: '18',
    correct: 'C',
    explanation: '参考PMBOK19',
  },
  {
    id: '19',
    correct: 'B',
    explanation: '参考PMBOK20',
  },
  {
    id: '20',
    correct: 'D',
    explanation: '参考PMBOK21，项目阶段决定情况',
  },
  {
    id: '21',
    correct: 'B',
    explanation: '参考PMBOK22，项目管理过程分为三类',
  },
  {
    id: '22',
    correct: 'A',
    explanation: '参考PMBOK26，请熟练知晓工作绩效数据、工作绩效信息、工作绩效报告之间的关系',
  },
  {
    id: '23',
    correct: 'D',
    explanation: '参考PMBOK28，方法论和裁剪',
  },
  {
    id: '24',
    correct: 'D',
    explanation: '参考PMBOK28',
  },
  {
    id: '25',
    correct: 'A',
    explanation: '参考PMBOK29',
  },
  {
    id: '26',
    correct: 'D',
    explanation: '参考PMBOK30，项目经理可以担任商业分析师的职责',
  },
  {
    id: '27',
    correct: 'B',
    explanation: '参考PMBOK33，收益管理计划中并没有描述经济可行性，这是商业论证中的内容',
  },
  {
    id: '28',
    correct: 'C',
    explanation: '参考PMBOK34，传统项目管理三重制约是范围、进度、成本，外加质量，构成了三角形的三个边和中间的面积部分',
  },
  {
    id: '29',
    correct: 'C',
    explanation: '参考PMBOK34，投资回收期是投资在多长时间内能够赚取，自然是越短越好',
  },
  {
    id: '30',
    correct: 'C',
    explanation: '参考PMBOK35，项目管理计划得到相关方批准，并不能说明就能够完全不变更',
  },
  {
    id: '31',
    correct: 'B',
    explanation: '参考PMBOK35.如果一个项目在范围、进度、成本等知识领域的角度判断是成功的，但是从商业角度并未成功，这是因为业务需要和市场环境在项目完成之前发生了变化。为了避免这种事情发生，就必须在项目开展期间不断确保项目和组织业务需要及市场环境目标保持一致。'
  }
];

const questions = [
  {
    id: '1',
    title: '项目管理已经成为新环境下必不可少的管理模式，以下都是项目的事例，除了:',
    options: {
      A: '商用喷气式飞机的研发',
      B: '商业软件应用程序开发',
      C: '会计人员财务统计',
      D: '针对某类疾病展开的药物研究',
    },
  },
  {
    id: '2',
    title: '作为项目管理从业者，应该能够遵守本行业所规定的价值观，关于价值观:',
    options: {
      A: '责任、勇敢、诚实、公平',
      B: '责任、尊重、公正、诚实',
      C: '尊重、诚实、公平、公开',
      D: '尊重、勇敢、诚实、公平',
    },
  },
  {
    id: '3',
    title: '关于目标与可交付成果，哪一个更准确:',
    options: {
      A: '开展项目是为了通过目标实现可交付成果',
      B: '开展项目是为了通过可交付成果实现目标',
      C: '目标是在一个过程、阶段或项目完成时需要完成的工作',
      D: '可交付成果必须独特并可核实，以有形的物件展示给相关方',
    },
  },
  {
    id: '4',
    title: '公司项目管理部门正在总结项目结束的原因，作为项目经理，你提供了若干个项目结束原因事例。关于项目结束，不正确的是:',
    options: {
      A: '无法获得所需的资源',
      B: '项目不会或不能达到目标',
      C: '组织战略或优先级的变更',
      D: '并非所有项目都会结束',
    },
  },
  {
    id: '5',
    title: '关于商业价值，以下描述正确的是:',
    options: {
      A: '商业价值是组织从商业运作中获得的收益，这些收益往往不能量化',
      B: '商业价值被视为是一种回报，即以某种投入换取时间、资金、货物或无形的回报',
      C: '商业价值包括有形价值和无形价值，比如股东权益就是无形价值的体现方式',
      D: '商业价值关乎投资者的期望，所以项目经理必须首先是一个商业分析师',
    },
  },
  {
    id: '6',
    title: '你的公司正在想办法提高工艺流程的升级改造，希望将原来某产品工艺生产的速度提高10%，公司任命你为项目经理，对工艺进行改造，这是一个:',
    options: {
      A: '基于新技术因素的项目',
      B: '基于市场需求因素的项目',
      C: '基于相关方需求因素的项目',
      D: '基于业务过程改进因素的项目',
    },
  },
  {
    id: '7',
    title: '组织通过开展项目管理来满足某个特定的需求，从而实现预期的收益或价值，据统计，全球每年有近40%左右的项目会以失败或不完善而告终，当项目管理不善，或者缺乏有效的项目管理时，会给组织或相关方带来',
    options: {
      A: '解决问题和争议',
      B: '平衡制约因素对项目的影响',
      C: '返工',
      D: '在适当的时间交付正确的产品',
    },
  },
  {
    id: '8',
    title: '当组织项目管理能力比较强时，能够显著提高组织战略能力，但它不一定能',
    options: {
      A: '将项目成果与业务目标联系起来',
      B: '更有效的展开市场竞争',
      C: '支持组织发展',
      D: '减轻组织成员的劳动量',
    },
  },
  {
    id: '9',
    title: '关于项目、项目集、项目组合，说法正确的是',
    options: {
      A: '项目集和项目管理的重点在于开展“正确”的项目集和项目',
      B: '项目集不是大项目，规模特别大的项目称之为“大型项目”',
      C: '项目组合管理注重以“正确”的方式开展项目集和项目',
      D: '一个项目至少属于一个项目集，但不一定属于一个项目组合',
    },
  },
  {
    id: '10',
    title: '关于项目集，正确的描述是',
    options: {
      A: '项目集是一组相互关联且被协调管理的项目、子项目集和项目集活动',
      B: '构成项目集的各组件之间不一定彼此有直接的相关性',
      C: '在整个项目集生命周期中，项目集经理渐进明细高层级的信息，将其转换为详细的计划',
      D: '组织开展的大项目往往都是项目集，在投资者角度，它们以优先级的方式被选择',
    },
  },
  {
    id: '11',
    title: '你所在的组织正在建设当地一个基础设施项目，涉及内容包括油气站建设、居民供水、供电、市政道路、以及市火车站等建设，组织决定将供水项目归为一类、供电项目归为一类，通过这种模式来开展基础设施项目的建设，这是一个',
    options: {
      A: '大型项目',
      B: '项目组合',
      C: '项目集',
      D: '项目',
    },
  },
  {
    id: '12',
    title: '关于项目和运营，说法错误的是',
    options: {
      A: '项目和运营会在产品生命周期的不同节点交叉',
      B: '运营管理关注产品的持续生产和(或)服务的持续运作',
      C: '运营管理重点关注把各种输入转变为输出的过程',
      D: '项目和运营的共同特点都是受制于时间的临时性',
    },
  },
  {
    id: '13',
    title: '组织项目管理(OPM)旨在',
    options: {
      A: '确保组织的各个层级都了解组织的战略愿景、支持愿景的举措、目标及可交付成果',
      B: '确保组织开展正确的项目并合适的分配关键资源',
      C: '使项目符合组织的战略业务目标，项目组合、项目集、项目进行系统化管理',
      D: '成为驱动组织战略目标的框架',
    },
  },
  {
    id: '14',
    title: '旨在创造最终结果的系统化的一系列活动，以便对一个或多个输入进行加工，生产一个或多个输出，这是一个',
    options: {
      A: '项目开发生命周期',
      B: '项目阶段',
      C: '项目管理过程',
      D: '项目管理过程组',
    },
  },
  {
    id: '15',
    title: '项目经理得到任命后，根据项目的特征决定采取敏捷项目管理的做法来实现项目目标，敏捷项目管理与哪个生命周期特征相匹配',
    options: {
      A: '迭代型',
      B: '增量型',
      C: '适应型',
      D: '变更型',
    },
  },
  {
    id: '16',
    title: '__通过渐进的方式增加产品的功能，__通过一系列重复的循环活动来开发产品，横线处是',
    options: {
      A: '迭代  增量',
      B: '增量  迭代',
      C: '计划  适应',
      D: '适应  计划',
    },
  },
  {
    id: '17',
    title: '项目经理正在思考采用哪种生命周期方式来开展当前的项目，PMO建议她结合组织当前的知识库来获取，项目经理发现，项目管理生命周期的选择具有很大的灵活性，以下哪种方式对生命周期选择没有帮助',
    options: {
      A: '确定需要在各个阶段实施的一个或多个过程',
      B: '在合适的阶段实施确定的一个或多个过程',
      C: '项目经理必须具备业务运营管理方面的技能',
      D: '调整阶段的各种属性',
    },
  },
  {
    id: '18',
    title: '关于产品生命周期的说法，正确的是',
    options: {
      A: '一个项目生命周期包括若干个产品生命周期',
      B: '项目生命周期等同于产品生命周期',
      C: '项目生命周期和产品生命周期相互独立，产品可能由项目产生',
      D: '产品生命周期过程包括启动、规划、执行、监控、收尾',
    },
  },
  {
    id: '19',
    title: '你和项目团队正在判断应该将项目划分为多个便于管理的部分，这些部分被确认为项目的“阶段”，关于项目阶段，以下说法都是错的，除了',
    options: {
      A: '项目阶段和项目管理过程是一个概念',
      B: '一个阶段可能经历启动、规划、执行、监控、收尾过程',
      C: '阶段的属性一般包括设计、原型、建造等',
      D: '从管理学角度，项目阶段划分的越细越好，有利于团队理解和执',
    },
  },
  {
    id: '20',
    title: '项目团队刚刚完成一个阶段工作，团队开会讨论本阶段工作，目的是',
    options: {
      A: '进入下一个阶段',
      B: '对已完成阶段进行整改',
      C: '停留在当前阶段',
      D: '以上都可能',
    },
  },
  {
    id: '21',
    title: '项目管理过程迭代的次数和过程间的相互作用因具体项目的需求而不同，以下哪一个是“根据项目需要，定期开展的过程”',
    options: {
      A: '制定项目章程',
      B: '因团队成员的需要而进行的人员招募',
      C: '项目风险识别',
      D: '相关方识别过程',
    },
  },
  {
    id: '22',
    title: '一位团队成员正在对某产品的功能进行测试，项目经理向他询问测试情况，此成员将测试过程中截止当前的工作完成百分比、质量和技术绩效测量结果、进度计划活动的开始和结束日期等测量值提供给项目经理，这些测量值是',
    options: {
      A: '工作绩效数据',
      B: '工作绩效信息',
      C: '工作绩效报告',
      D: '项目管理计划',
    },
  },
  {
    id: '23',
    title: '__由专门的从业人员所采用的实践、技术、程序和规则所组成的体系',
    options: {
      A: '标准',
      B: '基准',
      C: '指南',
      D: '方法论',
    },
  },
  {
    id: '24',
    title: '你的一位团队成员正在向你推荐采用PMI发布的《项目管理知识体系指南》来管理项目，她认为完全按照《指南》的规定来开展项目是必要的，但是你知道，需要对《指南》中的内容进行有针对性的裁剪，关于项目裁剪，错误的说法是',
    options: {
      A: '项目经理与项目团队、发起人或组织管理层合作进行裁剪',
      B: '由于每个项目都是独特的，所以有必要进行项目裁剪',
      C: '裁剪应处理关于范围、进度、成本、资源、质量和风险的相互竞争关系',
      D: '在对于特定项目而言，方法论中的裁剪法是不能进行裁剪的',
    },
  },
  {
    id: '25',
    title: '商业论证文件是由谁负责制定和维护的',
    options: {
      A: '发起人',
      B: '客户',
      C: '项目经理',
      D: '商业分析师',
    },
  },
  {
    id: '26',
    title: '关于商业论证，以下说法错误的是',
    options: {
      A: '商业论证列出了项目启动的目标和理由',
      B: '在项目启动之前，通过商业论证，可能会做出继续或终止项目的决策',
      C: '需求评估通常是在商业论证之前进行',
      D: '项目经理不能扮演商业分析师的角色',
    },
  },
  {
    id: '27',
    title: '项目收益管理计划项目实现收益的方式和时间，以及应制定的收益衡量机制。关于项目收益管理计划，以下描述都是正确的，除了',
    options: {
      A: '在项目生命周期的早期就应该确定目标收益，据此而制定项目收益管理计划',
      B: '项目收益管理计划中描述了诸如目标收益、战略一致性、收益责任人、经济可行性等要素',
      C: '在制定项目收益管理计划时，需要依据商业论证和需求评估中的数据和信息',
      D: '项目收益管理计划的制定和维护是一项迭代活动，需要在整个项目生命周期进行管理',
    },
  },
  {
    id: '28',
    title: '以下哪些指标被认为是确定项目是否成功的重要因素',
    options: {
      A: '范围、进度、质量、资源',
      B: '进度、质量、风险、相关方',
      C: '范围、进度、成本、质量',
      D: '进度、成本、质量、风险',
    },
  },
  {
    id: '29',
    title: '一项可以说明项目是否成功的依据之一是，项目是否达到商业论证中记录的，已经确定的财务测量指标，哪一项数据越小，则说明项目的效益价值越高',
    options: {
      A: '投资回报率(ROI)',
      B: '内部收益率(IRR)',
      C: '投资回收期(PBP)',
      D: '收益成本率(BCR)',
    },
  },
  {
    id: '30',
    title: '项目的成功对于组织而言至关重要，由于相关方对项目期望的不同，可以从多个维度来判断项目的成功，以下都是项目成功的因素之一，除了',
    options: {
      A: '完成组织从“当前状态”过度到“未来状态”',
      B: '遵循治理规则',
      C: '项目管理计划得到了相关方的批准',
      D: '使相关方满意',
    },
  },
  {
    id: '31',
    title: '在项目结项，并正式移交可交付成果的时候，管理层发现，项目从范围、进度、成本角度评估来看是符合要求的，但是从商业角度并没有提供太多的价值，为了避免这种事情发生，应该',
    options: {
      A: '任命一个能力更为注重的项目经理担此重任',
      B: '在项目开展期间不断确保项目和组织业务需要及市场环境目标的一致性',
      C: '在项目开展过程中制定详细的项目管理指导计划',
      D: '邀请更多的相关方参与项目收尾过程，提供更加客观公正的验收报告',
    },
  }
];

const chapter1 = {
  id: 'chapter1',
  title: '第一章:引论',
  questions,
  answers,
};

export default chapter1;